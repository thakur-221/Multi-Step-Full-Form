let currentStep = 1;

function showStep(step) {
  document.querySelectorAll('.form-step').forEach((el, index) => {
    el.classList.remove('active');
    if (index + 1 === step) el.classList.add('active');
  });

  document.querySelectorAll('.step').forEach((el, index) => {
    el.classList.remove('active');
    if (index + 1 === step) el.classList.add('active');
  });

  currentStep = step;

  // If final step, populate summary
  if (step === 4) {
    updateSummary();
  }
}

function nextStep() {
  if (currentStep < 4) showStep(currentStep + 1);
}

function prevStep() {
  if (currentStep > 1) showStep(currentStep - 1);
}

// Make step icons clickable
document.querySelectorAll('.step').forEach((stepEl, index) => {
  stepEl.addEventListener('click', () => {
    showStep(index + 1);
  });
});

// Create a summary from inputs
function updateSummary() {
  const summary = document.getElementById('summary');
  if (!summary) return;

  const name = document.querySelector('input[placeholder="Name"]').value;
  const email = document.querySelector('input[placeholder="Email"]').value;
  const phone = document.querySelector('input[placeholder="Phone Number"]').value;

  const plan = document.querySelector('input[name="plan"]:checked');
  const planText = plan ? plan.value : "No plan selected";

  const addOns = Array.from(document.querySelectorAll('input[name="addons"]:checked'))
    .map(cb => cb.value);

  summary.innerHTML = `
    <h3>Summary</h3>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Plan:</strong> ${planText}</p>
    <p><strong>Add-Ons:</strong> ${addOns.length ? addOns.join(", ") : "None"}</p>
  `;
}
