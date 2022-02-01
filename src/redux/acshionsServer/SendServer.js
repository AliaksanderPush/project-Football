const url = "https://fe.it-academy.by/AjaxStringStorage2.php";
let updatePassword = 0;
const stringName = "PUSHNOV_PROJECT_FOOTBALL";

export const SendServer = async (props) => {
  let sp = new URLSearchParams();
  updatePassword = Math.random();
  sp.append("f", "LOCKGET");
  sp.append("n", stringName);
  sp.append("p", updatePassword);

  try {
    let response = await fetch(url, { method: "post", body: sp });
    let data = await response.json();
    lockGetReady(data);
  } catch (error) {
    console.error(error);
  }

  async function lockGetReady(callresult) {
    let sp = new URLSearchParams();
    sp.append("f", "UPDATE");
    sp.append("n", stringName);
    sp.append("p", updatePassword);
    sp.append("v", JSON.stringify(props));

    try {
      let response = await fetch(url, { method: "post", body: sp });
      updateReady(response);
    } catch (error) {
      console.error(error);
    }
  }

  function updateReady(callresult) {
    console.log(callresult);
    if (callresult.error !== undefined) alert(callresult.error);
  }
};
