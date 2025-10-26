document.getElementById("budgetForm").addEventListener("submit", function(e) {
  e.preventDefault(); // prevent form submission

  // Get values from the form
  const income = parseFloat(document.getElementById("income").value);
  const rent = parseFloat(document.getElementById("rent").value);
  const groceries = parseFloat(document.getElementById("groceries").value);
  const utilities = parseFloat(document.getElementById("utilities").value);
  const transportation = parseFloat(document.getElementById("transportation").value);
  const debt = parseFloat(document.getElementById("debt").value);

  const totalExpenses = rent + groceries + utilities + transportation + debt;
  const remaining = income - totalExpenses;

  // Display summary
  const budgetSummary = document.getElementById("budgetSummary");
  budgetSummary.textContent = `Total Expenses: $${totalExpenses.toFixed(2)}, Remaining: $${remaining.toFixed(2)}`;

  // Suggestions
  const suggestions = document.getElementById("suggestions");
  suggestions.innerHTML = ""; // clear previous suggestions

  if (remaining < 0) {
    suggestions.innerHTML += "<li>Your expenses exceed your income. Consider cutting costs or increasing income.</li>";
  } else {
    suggestions.innerHTML += "<li>Your budget is balanced, good job!</li>";
    if (debt > 0) {
      suggestions.innerHTML += "<li>Consider paying down debt faster to reduce interest.</li>";
    }
    if ((rent + utilities) / income > 0.5) {
      suggestions.innerHTML += "<li>Housing costs are high relative to your income. Consider cheaper options.</li>";
    }
    if ((groceries + transportation) / income > 0.3) {
      suggestions.innerHTML += "<li>Food and transportation expenses are high. Look for ways to save.</li>";
    }
    if (remaining > 0) {
      suggestions.innerHTML += "<li>You have extra money left. Consider saving or investing.</li>";
    }
  }
});
