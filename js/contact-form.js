$(document).ready(function () {
    $('#form-contact').on('submit', function (event) {
      event.preventDefault();

      const checkbox = $('#agree');

      if (!checkbox.is(':checked')) {
        $('#modalMessage').text('개인정보 수집 이용에 동의해야 합니다.');
        $('#responseModal').modal('show');
        return;
      }

      $.ajax({
        type: 'POST',
        url: $(this).attr('action'),
        data: $(this).serialize(),
        success: function (response) {
          $('#modalMessage').text(response);
          $('#responseModal').modal('show');
          $('#form-contact')[0].reset();
        },
        error: function (xhr) {
          const errorMessageText = xhr.responseJSON ? xhr.responseJSON.message : '문의 사항 접수에 실패하였습니다. 다시 시도해 주세요.';
          $('#modalMessage').text(errorMessageText);
          $('#responseModal').modal('show');
        }
      });
    });
  });