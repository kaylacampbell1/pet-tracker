const petForm = document.getElementById("pet-form");

petForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(petForm);
  const name = formData.get("name");
  const image = formData.get("image");
  const species = formData.get("species");
  const friendly = formData.get("friendly");
  console.log(name, image, species, friendly);
})