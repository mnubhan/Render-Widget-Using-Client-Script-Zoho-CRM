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
      //   let data = {
      //     Entity: module,
      //     RecordID: recordId,
      //     Title: noteTitle,
      //     Content: noteContent
      //   };
      //   ZOHO.CRM.API.addNotes(data).then(function (data) {
      //     console.log(data);
      //   });
      //   ZOHO.CRM.UI.Popup.closeReload();
      console.log({ Title: noteTitle, Content: noteContent });
      $Client.close({ Title: noteTitle, Content: noteContent });
    }
  });
});
ZOHO.embeddedApp.init();
// function closewidget() {
//   if (count > maxRows) {
//     alert("Selected product is greater than the maximum subform rows.");
//   } else {
//     var selected_products = [];
//     for (product_element of document.getElementsByClassName("products")) {
//       product_element.checked &&
//         selected_products.push(
//           productData.find((product) => product.id === product_element.id)
//         );
//     }
//     console.log(
//       "returning to Client Script ...",
//       JSON.stringify(selected_products)
//     );
//     $Client.close(selected_products);
//   }
// }
