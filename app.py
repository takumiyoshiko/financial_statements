from flask import Flask, send_from_directory, render_template, request, make_response
import os
import requests
import json
import pandas as pd
import json
import traceback
import urllib.parse
import datetime
import re
import zipfile
import glob
from bs4 import BeautifulSoup
import openpyxl
import shutil
import time


def request_sever(params):
    url = "https://disclosure.edinet-fsa.go.jp/api/v1/documents.json"
    print(params)
    try:
        res = requests.get(url, params=params, verify=True, timeout=10)
        res_text = json.loads(res.text)
        results = res_text["results"]
    except:
        print(traceback.format_exc())
        results = []
    return results
    


def search_docid(company, AD, month, day, doc_type):
    kessan = []
    date = datetime.date(int(AD), int(month),int(day))
    params = {"date":date, "type": 2 }
    results = request_sever(params)
    for result in results:
        if result['docDescription'] is not None:
            if doc_type in result['docDescription']:
                if re.search(company, result['filerName']):  
                    print(result['docID'], result['docDescription'],result['filerName'])
                    kessan.append(result)
    if kessan:
        return  kessan[0]['docID']
    return None

unit_list = ['円', '百万円', '％', '倍', '人', '千株', '株', '名', '千円']


def should_add(text):
  for unit in unit_list:
    if re.match(f"（{unit}）", text) or re.match(f"\({unit}\)", text):
      return True
  return False


def get_finacial_statements(docid):
  url = 'https://disclosure.edinet-fsa.go.jp/api/v1/documents/' + docid
  params = {
  "type" : 1
  }
  res = requests.get(url, params = params, verify=False)
  filename = docid + ".zip"
  if res.status_code == 200:
    with open(filename, 'wb') as f:
      for chunk in res.iter_content(chunk_size=1024):
        f.write(chunk)

  # zipファイル解凍
  with zipfile.ZipFile(filename) as existing_zip:
    existing_zip.extractall(docid)

  # 対象htmの取得
  filepath = docid + '/XBRL/PublicDoc/'
  files = glob.glob(filepath+'*.htm')
  files = sorted(files)
  target_file = files[1]

  with open(target_file , encoding='utf-8') as f:
    html = f.read()

  # htmデータの取得
  soup = BeautifulSoup(html, 'html.parser')
  tag_tables = soup.find_all('table')

  tag_trs = tag_tables[0].find_all('tr')
  tag_trs.pop(0)
  index = 0
  for tag_tr in tag_trs:
    row = []
    tag_tds = tag_tr.find_all('td')
    for tag_td in tag_tds:
      text = re.sub("\n", "", tag_td.text)
      if should_add(text):
        row[-1] += text
      else:
        row.append(text)
    if index == 0:
      df = pd.DataFrame(columns=row)
    else:
      df.loc[index] = row
    index += 1
  os.remove(filename)
  shutil.rmtree(docid + "/")
  return df

app = Flask(__name__)

# トップ画面
@app.route('/')
def index():
    return render_template('index.html')


@app.route("/retrieve_article", methods = ["POST", "GET"])
def export():
   if request.method == "POST":
        result = request.form
        filename = result['company'] + result['year'] + result['month'] + result['day'] + '.csv'
        filename = urllib.parse.quote(filename) 
        docid = search_docid(result['company'], result['year'], result['month'], result['day'], result['type'])
        if not docid:
            return render_template('error.html')
        df = get_finacial_statements(docid)
        print(df)
        resp = make_response(df.to_csv())
        resp.data = resp.data.decode('utf-8').encode('cp932',"ignore")
        resp.headers["Content-Disposition"] = "attachment; filename={}; filename*=UTF-8''{}".format(filename,filename)
        resp.headers["Content-Type"] = "text/csv"
        return resp

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=int(os.environ.get("PORT", 5000)))