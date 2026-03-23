const form = document.getElementById('formUpload');
const feedback = document.getElementById('feedback');
const inputFoto = document.getElementById('inputFoto');
const modalImage = document.getElementById('modalImage');
const imagenModal = new bootstrap.Modal(document.getElementById('imagenModal'));


function limpiarInput() {
  if (inputFoto) inputFoto.value = '';
}

// Listener único para el submit
form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const data = new FormData(form);

  try {
    const res = await fetch('/upload', { method: 'POST', body: data });
    const json = await res.json();

    feedback.style.display = 'block';
    feedback.textContent = '';
    feedback.className = 'alert ' + (json.ok ? 'alert-success' : 'alert-danger');
    feedback.textContent = json.mensaje;

    if (json.ok) {
      modalImage.src = `/uploads/${json.archivo}`;
      imagenModal.show(); // Abrir modal
    }

  } catch (err) {
    feedback.style.display = 'block';
    feedback.className = 'alert alert-danger';
    feedback.textContent = 'Error de red';
  }
  limpiarInput();
});