( ()=>{






    function renderLeft(objectForCorrect={}) {
        let leftPartHtml = '';
        if (objectForCorrect === undefined) {
            leftPartHtml = `
            <div class="col-md-6 col-sm-12">
                    <div class="card add-travel-card">
                        <h3>New travel:</h3>
                        <input type="text" class="form-control" id="dest_city" placeholder="City">
                        <input type="text" class="form-control" id="dest_country" placeholder="Country">
                        <input type="number" class="form-control" id="budget_value" placeholder="Budget">
                        <label for="start_date">Date start</label><input type="date" class="form-control" id="start_date" placeholder="Date start">
                        <label for="end_date">Date end</label><input type="date" class="form-control" id="end_date" placeholder="Date end">
                        <label for="persons">Persons:</label>
                        <select id="persons" class="form-control">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value=">7">>7</option>
                        </select>
                        <label for="transfer_type">Main transfer type:</label>
                        <select id="transfer_type" class="form-control">
                            <option value="def">---</option>
                            <option value="car">Private car</option>
                            <option value="bus">Bus</option>
                            <option value="railway">Railway</option>
                            <option value="fly">Fly</option>
                            <option value="rent_cat">Rent car</option>
                            <option value="taxi">Taxi</option>
                        </select>
                        <button class="btn btn-success btn-save-travel">Save travel</button>
                    </div>
                </div>
            `;
        }
        else{
            leftPartHtml = `
            <div class="col-md-6 col-sm-12">
                    <div class="card add-travel-card">
                        <h3>New travel:</h3>
                        <input type="text" class="form-control" id="dest_city" placeholder="City">
                        <input type="text" class="form-control" id="dest_country" placeholder="Country">
                        <input type="number" class="form-control" id="budget_value" placeholder="Budget">
                        <label for="start_date">Date start</label><input type="date" class="form-control" id="start_date" placeholder="Date start">
                        <label for="end_date">Date end</label><input type="date" class="form-control" id="end_date" placeholder="Date end">
                        <label for="persons">Persons:</label>
                        <select id="persons" class="form-control">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value=">7">>7</option>
                        </select>
                        <label for="transfer_type">Main transfer type:</label>
                        <select id="transfer_type" class="form-control">
                            <option value="def">---</option>
                            <option value="car">Private car</option>
                            <option value="bus">Bus</option>
                            <option value="railway">Railway</option>
                            <option value="fly">Fly</option>
                            <option value="rent_cat">Rent car</option>
                            <option value="taxi">Taxi</option>
                        </select>
                        <button class="btn btn-success btn-redact-travel">Save travel</button>
                    </div>
                </div>
            `;
        }
        const destCity = document.getElementById('dest_city');
        const destCountry = document.getElementById('dest_country');
        const budget = document.getElementById('budget_value');
        const startDate = document.getElementById('start_date');
        const endDate = document.getElementById('end_date');
        const persons = document.getElementById('persons');
        const transferType = document.getElementById('transfer_type');
    }


    function renderRight(travelDatabase) {


        const rightPartHtml = `
        <div class="col-md-6 col-sm-12 travel-history">
                <h3>Travel history:</h3>
                <div class="card travel-card">
                    <div class="title">
                        <h4>From Haifa to Jerusalem</h4>
                        <i class="bi bi-pencil-square edit"></i>
                        <i class="bi bi-x-circle remove"></i>
                        <i class="bi bi-three-dots-vertical details"></i>
                    </div>
                    <span>Expected budget: 1000 ILS</span>
                    <span>1.03.2023 - 4.03.2023 | 2 persons | Private car</span>
                </div>
                <div class="card travel-card">
                    <div class="title">
                        <h4>From Haifa to Barcelona</h4>
                        <i class="bi bi-pencil-square edit"></i>
                        <i class="bi bi-x-circle remove"></i>
                        <i class="bi bi-three-dots-vertical details"></i>
                    </div>
                    <span>Expected budget: 3000 ILS</span>
                    <span>21.06.2023 - 24.06.2023 | 3 persons | Fly</span>
                </div>
                <div class="card travel-card">
                    <div class="title">
                        <h4>From Haifa to Torino</h4>
                        <i class="bi bi-pencil-square edit"></i>
                        <i class="bi bi-x-circle remove"></i>
                        <i class="bi bi-three-dots-vertical details"></i>
                    </div>
                    <span>Expected budget: 2700 ILS</span>
                    <span>15.08.2023 - 20.08.2023 | 2 persons | Fly</span>
                </div>
                <div class="card travel-card">
                    <div class="title">
                        <h4>From Haifa to Bukovel</h4>
                        <i class="bi bi-pencil-square edit"></i>
                        <i class="bi bi-x-circle remove"></i>
                        <i class="bi bi-three-dots-vertical details"></i>
                    </div>
                    <span>Expected budget: 5000 ILS</span>
                    <span>21.12.2023 - 5.01.2024 | 3 persons | Fly</span>
                </div>
            </div>        
        `;





    }



})();