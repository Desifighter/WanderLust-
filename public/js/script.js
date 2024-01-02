(() => {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();

let taxSwitch = document.getElementById("flexSwitchCheckDefault");
taxSwitch.addEventListener("click", () => {
  let taxInfo = document.getElementsByClassName("tax-info");
  let actualPrices = document.getElementsByClassName("actual-price");

  for (let i = 0; i < taxInfo.length; i++) {
    if (taxSwitch.checked) {
      // Display tax information
      taxInfo[i].style.display = "inline";
      // Hide actual price
      actualPrices[i].style.display = "none";
    } else {
      // Hide tax information
      taxInfo[i].style.display = "none";
      // Display actual price
      actualPrices[i].style.display = "inline";
    }
  }
});

//Search functionality

const searchInp = document.querySelector(".search-inp");
const searchBtn = document.querySelector(".search-btn");

searchBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const searchedText = searchInp.value;
  window.location.href = `/listings/search/${searchedText}`;
});
