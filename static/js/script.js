$(function() {
    // 1. 「全選択」する
    $('#pref_all').on('click', function() {
        $("input[name='pref[]']").prop('checked', this.checked);
        $('#region1').prop('checked', this.checked);
        $('#region2').prop('checked', this.checked);
        $('#region3').prop('checked', this.checked);
        $('#region4').prop('checked', this.checked);
        $('#region5').prop('checked', this.checked);
        $('#region6').prop('checked', this.checked);
        $('#region7').prop('checked', this.checked);
        $('#region8').prop('checked', this.checked);
    });
    // 2. 「全選択」以外のチェックボックスがクリックされたら、
    $("input[name='pref[]']").on('click', function() {
        if ($('#all_region :checked').length == $('#all_region :input').length) {
            // 全てのチェックボックスにチェックが入っていたら、「全選択」 = checked
            $('#pref_all').prop('checked', true);
        } else {
            // 1つでもチェックが入っていたら、「全選択」 = checked
            $('#pref_all').prop('checked', false);
        }
    });

    $('#region1').change('click', function() {
        $('#div_region1 :input').prop('checked', this.checked);
        if ($('#all_region :checked').length == $('#all_region :input').length) {
            // 全てのチェックボックスにチェックが入っていたら、「全選択」 = checked
            $('#pref_all').prop('checked', true);
        } else {
            // 1つでもチェックが入っていたら、「全選択」 = checked
            $('#pref_all').prop('checked', false);
        }
    });

    $('#div_region1 :input').on('click', function() {
        if ($('#div_region1 :checked').length == $('#div_region1 :input').length) {
            // 全てのチェックボックスにチェックが入っていたら、「全選択」 = checked
            $('#region1').prop('checked', true);
        } else {
            // 1つでもチェックが入っていたら、「全選択」 = checked
            $('#region1').prop('checked', false);
        }
    });


    $('#region2').on('click', function() {
        $('#div_region2 :input').prop('checked', this.checked);
        if ($('#all_region :checked').length == $('#all_region :input').length) {
            // 全てのチェックボックスにチェックが入っていたら、「全選択」 = checked
            $('#pref_all').prop('checked', true);
        } else {
            // 1つでもチェックが入っていたら、「全選択」 = checked
            $('#pref_all').prop('checked', false);
        }
    });

    $('#div_region2 :input').on('click', function() {
        if ($('#div_region2 :checked').length == $('#div_region2 :input').length) {
            // 全てのチェックボックスにチェックが入っていたら、「全選択」 = checked
            $('#region2').prop('checked', true);
        } else {
            // 1つでもチェックが入っていたら、「全選択」 = checked
            $('#region2').prop('checked', false);
        }
    });

    $('#region3').on('click', function() {
        $('#div_region3 :input').prop('checked', this.checked);
        if ($('#all_region :checked').length == $('#all_region :input').length) {
            // 全てのチェックボックスにチェックが入っていたら、「全選択」 = checked
            $('#pref_all').prop('checked', true);
        } else {
            // 1つでもチェックが入っていたら、「全選択」 = checked
            $('#pref_all').prop('checked', false);
        }
    });

    $('#div_region3 :input').on('click', function() {
        if ($('#div_region3 :checked').length == $('#div_region3 :input').length) {
            // 全てのチェックボックスにチェックが入っていたら、「全選択」 = checked
            $('#region3').prop('checked', true);
        } else {
            // 1つでもチェックが入っていたら、「全選択」 = checked
            $('#region3').prop('checked', false);
        }
    });

    $('#region4').on('click', function() {
        $('#div_region4 :input').prop('checked', this.checked);
        if ($('#all_region :checked').length == $('#all_region :input').length) {
            // 全てのチェックボックスにチェックが入っていたら、「全選択」 = checked
            $('#pref_all').prop('checked', true);
        } else {
            // 1つでもチェックが入っていたら、「全選択」 = checked
            $('#pref_all').prop('checked', false);
        }
    });

    $('#div_region4 :input').on('click', function() {
        if ($('#div_region4 :checked').length == $('#div_region4 :input').length) {
            // 全てのチェックボックスにチェックが入っていたら、「全選択」 = checked
            $('#region4').prop('checked', true);
        } else {
            // 1つでもチェックが入っていたら、「全選択」 = checked
            $('#region4').prop('checked', false);
        }
    });

    $('#region5').on('click', function() {
        $('#div_region5 :input').prop('checked', this.checked);
        if ($('#all_region :checked').length == $('#all_region :input').length) {
            // 全てのチェックボックスにチェックが入っていたら、「全選択」 = checked
            $('#pref_all').prop('checked', true);
        } else {
            // 1つでもチェックが入っていたら、「全選択」 = checked
            $('#pref_all').prop('checked', false);
        }
    });

    $('#div_region5 :input').on('click', function() {
        if ($('#div_region5 :checked').length == $('#div_region5 :input').length) {
            // 全てのチェックボックスにチェックが入っていたら、「全選択」 = checked
            $('#region5').prop('checked', true);
        } else {
            // 1つでもチェックが入っていたら、「全選択」 = checked
            $('#region5').prop('checked', false);
        }
    });

    $('#region6').on('click', function() {
        $('#div_region6 :input').prop('checked', this.checked);
        if ($('#all_region :checked').length == $('#all_region :input').length) {
            // 全てのチェックボックスにチェックが入っていたら、「全選択」 = checked
            $('#pref_all').prop('checked', true);
        } else {
            // 1つでもチェックが入っていたら、「全選択」 = checked
            $('#pref_all').prop('checked', false);
        }
    });

    $('#div_region6 :input').on('click', function() {
        if ($('#div_region6 :checked').length == $('#div_region6 :input').length) {
            // 全てのチェックボックスにチェックが入っていたら、「全選択」 = checked
            $('#region6').prop('checked', true);
        } else {
            // 1つでもチェックが入っていたら、「全選択」 = checked
            $('#region6').prop('checked', false);
        }
    });

    $('#region7').on('click', function() {
        $('#div_region7 :input').prop('checked', this.checked);
        if ($('#all_region :checked').length == $('#all_region :input').length) {
            // 全てのチェックボックスにチェックが入っていたら、「全選択」 = checked
            $('#pref_all').prop('checked', true);
        } else {
            // 1つでもチェックが入っていたら、「全選択」 = checked
            $('#pref_all').prop('checked', false);
        }
    });

    $('#div_region7 :input').on('click', function() {
        if ($('#div_region7 :checked').length == $('#div_region7 :input').length) {
            // 全てのチェックボックスにチェックが入っていたら、「全選択」 = checked
            $('#region7').prop('checked', true);
        } else {
            // 1つでもチェックが入っていたら、「全選択」 = checked
            $('#region7').prop('checked', false);
        }
    });

    $('#region8').on('click', function() {
        $('#div_region8 :input').prop('checked', this.checked);
        if ($('#all_region :checked').length == $('#all_region :input').length) {
            // 全てのチェックボックスにチェックが入っていたら、「全選択」 = checked
            $('#pref_all').prop('checked', true);
        } else {
            // 1つでもチェックが入っていたら、「全選択」 = checked
            $('#pref_all').prop('checked', false);
        }
    });

    $('#div_region8 :input').on('click', function() {
        if ($('#div_region8 :checked').length == $('#div_region8 :input').length) {
            // 全てのチェックボックスにチェックが入っていたら、「全選択」 = checked
            $('#region8').prop('checked', true);
        } else {
            // 1つでもチェックが入っていたら、「全選択」 = checked
            $('#region8').prop('checked', false);
        }
    });
});