import $ from "jquery";

export const SendServer = (props) => {
  const url = "https://fe.it-academy.by/AjaxStringStorage2.php";
  const updatePassword = Math.random();
  const stringName = "PUSHNOV_PROJECT_FOOTBALL";

  $.ajax({
    url: url,
    type: "POST",
    cache: false,
    dataType: "json",
    data: { f: "LOCKGET", n: stringName, p: updatePassword },
    success: (data) => lockGetReady(data),
    error: errorHandler,
  });

  function lockGetReady(callresult) {
    console.log("callresult", callresult);
    if (callresult.error !== undefined) alert(callresult.error);
    else {
      $.ajax({
        url: url,
        type: "POST",
        cache: false,
        dataType: "json",
        data: {
          f: "UPDATE",
          n: stringName,
          v: JSON.stringify(props),
          p: updatePassword,
        },
        success: (data) => updateReady(data),
        error: errorHandler,
      });
    }
  }
  function errorHandler(jqXHR, statusStr, errorStr) {
    console.log(statusStr + " " + errorStr);
  }

  function updateReady(callresult) {
    if (callresult.error !== undefined) {
      console.log(callresult.error);
    }
  }
};
