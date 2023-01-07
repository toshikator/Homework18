( ()=>{
    let travelDatabase = [];
    loadDatabase();

    function renderLeft(objectForCorrect = undefined, elementNumber= 0) {
        const left = document.querySelector('.container .row>div');
        // console.log( 'start of left render',objectForCorrect);
        let leftPartHtml = '';
        if (objectForCorrect !== undefined) {
            leftPartHtml = `            
                    <div class="card add-travel-card">
                        <h3>Redact the travel:</h3>
                        <input type="text" class="form-control" id="dest_city" placeholder="City" required>
                        <input type="text" class="form-control" id="dest_country" placeholder="Country" required>
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
                        <button class="btn btn-success btn-redact-travel" elemNumber="${elementNumber}" name="edit_travel_btn">Edit travel</button>
                    </div>                
            `;
            left.innerHTML = leftPartHtml;
            document.querySelector('.btn-redact-travel').addEventListener('click',saveTravel);
        }
        else{
            leftPartHtml = `            
                    <div class="card add-travel-card">
                        <h3>New travel:</h3>
                        <input type="text" class="form-control" id="dest_city" placeholder="City" required>
                        <input type="text" class="form-control" id="dest_country" placeholder="Country" required>
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
                            <option value="unknown">---</option>
                            <option value="car">Private car</option>
                            <option value="bus">Bus</option>
                            <option value="railway">Railway</option>
                            <option value="fly">Fly</option>
                            <option value="rent_cat">Rent car</option>
                            <option value="taxi">Taxi</option>
                        </select>
                        <button class="btn btn-success btn-save-travel" name="save_travel_btn">Save travel</button>
                    </div>                
            `;
            left.innerHTML = leftPartHtml;
            document.querySelector('.btn-save-travel').addEventListener('click',saveTravel);
        }
    }

    function renderRight() {
        const right = document.querySelector('.travel-history');

        // const rightPartHtml = `
        // <div class="col-md-6 col-sm-12 travel-history">
        //         <h3>Travel history:</h3>
        //         <div class="card travel-card">
        //             <div class="title">
        //                 <h4>From Haifa to Jerusalem</h4>
        //                 <i class="bi bi-pencil-square edit"></i>
        //                 <i class="bi bi-x-circle remove"></i>
        //                 <i class="bi bi-three-dots-vertical details"></i>
        //             </div>
        //             <span>Expected budget: 1000 ILS</span>
        //             <span>1.03.2023 - 4.03.2023 | 2 persons | Private car</span>
        //         </div>
        //         <div class="card travel-card">
        //             <div class="title">
        //                 <h4>From Haifa to Barcelona</h4>
        //                 <i class="bi bi-pencil-square edit"></i>
        //                 <i class="bi bi-x-circle remove"></i>
        //                 <i class="bi bi-three-dots-vertical details"></i>
        //             </div>
        //             <span>Expected budget: 3000 ILS</span>
        //             <span>21.06.2023 - 24.06.2023 | 3 persons | Fly</span>
        //         </div>
        //         <div class="card travel-card">
        //             <div class="title">
        //                 <h4>From Haifa to Torino</h4>
        //                 <i class="bi bi-pencil-square edit"></i>
        //                 <i class="bi bi-x-circle remove"></i>
        //                 <i class="bi bi-three-dots-vertical details"></i>
        //             </div>
        //             <span>Expected budget: 2700 ILS</span>
        //             <span>15.08.2023 - 20.08.2023 | 2 persons | Fly</span>
        //         </div>
        //         <div class="card travel-card">
        //             <div class="title">
        //                 <h4>From Haifa to Bukovel</h4>
        //                 <i class="bi bi-pencil-square edit"></i>
        //                 <i class="bi bi-x-circle remove"></i>
        //                 <i class="bi bi-three-dots-vertical details"></i>
        //             </div>
        //             <span>Expected budget: 5000 ILS</span>
        //             <span>21.12.2023 - 5.01.2024 | 3 persons | Fly</span>
        //         </div>
        //     </div>
        // `;


        let testString = ['1','1','1','1'];
        right.innerHTML = '<h3>Travel history:</h3>'+testString.map((value,index)=>{
            if(travelDatabase[index]){
                return `
                    <div class="card travel-card">
                    <div class="title">
                        <h4>From Haifa to ${travelDatabase[index].dest_city}</h4>
                        <i class="bi bi-pencil-square edit" name="ed${index}"></i>
                        <i class="bi bi-x-circle remove" name="rm${index}"></i>
                        <i class="bi bi-three-dots-vertical details" name="de${index}"></i>
                    </div>
                    <span>Expected budget: ${travelDatabase[index].budget_value} NIS</span>
                    <span>${travelDatabase[index].start_date} - ${travelDatabase[index].end_date} | ${travelDatabase[index].persons} persons | ${travelDatabase[index].transfer_type}</span>
                </div>
                    `
            }else {
                return '<div class="card travel-card"><div class="title">Here you may see your future trip</div></div>';
            }
        }).join('');
        experiments();
    }

    function getCurrentElement() {
        return {
            dest_city : document.getElementById('dest_city').value,
            dest_country : document.getElementById('dest_country').value,
            budget_value : document.getElementById('budget_value').value,
            start_date : document.getElementById('start_date').value,
            end_date : document.getElementById('end_date').value,
            persons : document.getElementById('persons').value,
            transfer_type : document.getElementById('transfer_type').value,
        }
    }

    function saveDatabase() {
        localStorage.setItem('travelDatabase',JSON.stringify(travelDatabase));
    }

    function loadDatabase() {
        if (localStorage.getItem('travelDatabase')){
            travelDatabase = JSON.parse(localStorage.getItem('travelDatabase'));
        }
    }
    renderLeft();
    renderRight();

    function experiments() {
        const detailsNode = document.querySelectorAll('.details');
        detailsNode.forEach((value) => {
            value.addEventListener('click',showDetails);
        });
        const deleteNode = document.querySelectorAll('.remove');
        deleteNode.forEach((value) => {
            value.addEventListener('click',removeItem);
        });
        const redactNode = document.querySelectorAll('.edit')
        redactNode.forEach((value) => {
            value.addEventListener('click',goToRedactTravel);
        });
    }

    function removeItem() {
        let name = (this.getAttribute('name'));
        name = Number(name.substring(2,name.length));
        travelDatabase.splice(name,1);
        renderLeft();
        renderRight();
        saveDatabase();
    }

    function showDetails() {
        let result = '';
        let name = (this.getAttribute('name'));
        name = Number(name.substring(2,name.length));
        let string1 = Object.entries(travelDatabase[name]);
        string1.forEach((value,)=>{
            result = result.concat('\n',value[0],' -- ',value[1]);
        })
        alert( (result));
    }

    function saveTravel() {
        let name = this.getAttribute('name');
        if (name === 'save_travel_btn') {
            if (travelDatabase.length > 3) {
                travelDatabase.shift();
                travelDatabase.push(getCurrentElement());
            } else {
                travelDatabase.push(getCurrentElement());
            }
        }else if(name === 'edit_travel_btn'){
            const elemNumber = this.getAttribute('elemNumber');
            console.log(elemNumber);
            travelDatabase.splice(elemNumber,1,getCurrentElement());
        }
        saveDatabase();
        renderLeft();
        renderRight();
    }
    function goToRedactTravel() {
        let name = (this.getAttribute('name'));
        name = Number(name.substring(2,name.length));
        console.log(travelDatabase[name]);
        renderLeft(travelDatabase[name], name);
        saveDatabase();
        renderRight();
    }
})();