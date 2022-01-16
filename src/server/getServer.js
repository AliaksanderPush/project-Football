export const getServer = () => {
  async function getInfo() {
    const url = "https://fe.it-academy.by/AjaxStringStorage2.php";
    let sp = new URLSearchParams();
    sp.append("f", "READ");
    sp.append("n", "PUSHNOV_PROJECT_FOOTBALL");

    try {
      let response = await fetch(url, { method: "post", body: sp });
      let data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }
};
