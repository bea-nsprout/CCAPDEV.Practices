const submitBtn = document.querySelector('#submitBtn');
const errorMsg = document.querySelector('#form_error');

submitBtn.addEventListener('click', async (e) => {
    errorMsg.textContent = ""
    e.preventDefault();
    // TODO 1: Check if inputs are valid. If invalid, display error message in form_error paragraph element.
    let accountname = document.getElementById('accountName').value.trim();
    let debtamount = document.getElementById('debtAmount').value.trim();
    console.log(accountname)
    console.log(debtamount)

    if (!accountname || !debtamount) {
        errorMsg.textContent = "Input is missing value(s)!"
        return

    }
    if (debtamount <= 0) {
        errorMsg.textContent = "Debt amount must be a positive number"
        return
    }


    // TODO 2.1: If inputs are valid, send form data to `/add-debt` to create / update an account in the database
    app.post(/add-)

    // TODO 2.2: If successful, display either `Created New Account` or `Updated Existing Account` in an alert message then refresh the page.
    
});