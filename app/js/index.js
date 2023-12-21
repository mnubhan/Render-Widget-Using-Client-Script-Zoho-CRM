var count = 0;
var productData,
  maxRows = 0;
ZOHO.embeddedApp.on("PageLoad", async function (data) {
  console.log("data from Client Script", data);
  let submitButton = document.getElementById("submit");
  submitButton.addEventListener("click", function () {
    let noteTitle = document.querySelector(".title").value;
    let noteContent = document.querySelector(".note-content").value;
    if (noteTitle == "") {
      alert("Please enter note title");
    } else if (noteContent == "") {
      alert("Please enter note content");
    } else {
        let data = {
          Entity: module,
          RecordID: recordId,
          Title: noteTitle,
          Content: noteContent
        };
      console.log(data);
      $Client.close(data);
    }
  });
});
ZOHO.embeddedApp.init();
