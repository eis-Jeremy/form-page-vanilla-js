const profile = {
    name: "",
    age: 0,
    email: "",
    tel: "",
    address: "",
    city: "",
    zipCode: "",
}


function createForm() {
    // Hauptelemente erstellen
    const form = document.createElement("form");
    const h1 = document.createElement("h1");
    h1.setAttribute("id", "formular-ueberschrift")
    h1.textContent = "Deine Daten";

    form.method = "post";
    form.action = "";

    document.body.append(form);
    const fieldsetPersonal = createFieldsetPersonal();
    const fieldsetContact = createFieldsetContact();
    const submitBtnContainer = createSubmitBtnContainer();
    form.append(h1, fieldsetPersonal, fieldsetContact, submitBtnContainer);

    document.querySelector('input[type="submit"]').addEventListener("click", (event) => {
        event.preventDefault();
        showProfile();
    });

    function createDataContainer(
        dataContainerCategory,
        forAttribute,
        labelText,
        typeAttribute,
        nameAttribute,
        idAttribute,

        isTypeNumber = false,
        min = "0",
        max = "125",
    ) {
        const div = document.createElement("div");
        const label = document.createElement("label");
        const input = document.createElement("input");

        div.classList.add(`${dataContainerCategory}-data-container`)

        label.setAttribute("for", forAttribute);
        label.textContent = labelText;

        input.setAttribute("type", typeAttribute);
        input.setAttribute("name", nameAttribute);
        input.setAttribute("id", idAttribute);
        input.required = true;

        if (isTypeNumber) {
            input.setAttribute("min", min);
            input.setAttribute("max", max);
        }

        input.addEventListener("change", (event) => {
            const input = event.target;

            switch (input.id) {
                case "name":
                    profile.name = input.value;
                    break;
                case "age":
                    profile.age = input.value;
                    break;
                case "email":
                    profile.email = input.value;
                    break;
                case "tel":
                    profile.tel = input.value;
                    break;
                case "address":
                    profile.address = input.value;
                    break;
                case "city":
                    profile.city = input.value;
                    break;
                case "zip-code":
                    profile.zipCode = input.value;
                    break;

            }
        });

        div.append(label, input);

        return div;
    }

    function createFieldsetPersonal() {
        const fieldset = document.createElement("fieldset");
        const legend = document.createElement("legend");

        const dataContainerCategory = "personal";
        const attributeName = "name";
        const attributeAge = "age";

        fieldset.setAttribute("id", "personal-fieldset");
        fieldset.setAttribute("class", "container");
        legend.textContent = "Persönliche Daten";

        const nameContainer = createDataContainer(dataContainerCategory, attributeName, "Name: ", "text", attributeName, attributeName);
        const ageContainer = createDataContainer(dataContainerCategory, attributeAge, "Alter: ", "number", attributeAge, attributeAge, true);

        fieldset.append(legend, nameContainer, ageContainer);

        return fieldset;
    }

    function createFieldsetContact() {
        const fieldset = document.createElement("fieldset");
        const legend = document.createElement("legend");

        const dataContainerCategory = "contact";
        const attributeEmail = "email";
        const attributeTel = "tel";
        const attributeAddress = "address";
        const attributeCity = "city";
        const attributeZip = "zip-code";

        fieldset.setAttribute("id", "contact-fieldset");
        fieldset.setAttribute("class", "container")
        legend.textContent = "Kontaktdaten";

        const emailContainer = createDataContainer(dataContainerCategory, attributeEmail, "E-Mail: ", attributeEmail, attributeEmail, attributeEmail);
        const telContainer = createDataContainer(dataContainerCategory, attributeTel, "Telefonnummer: ", attributeTel, attributeTel, attributeTel);
        const addressContainer = createDataContainer(dataContainerCategory, attributeAddress, "Addresse: ", "text", attributeAddress, attributeAddress);
        const cityContainer = createDataContainer(dataContainerCategory, attributeCity, "Stadt: ", "text", attributeCity, attributeCity)
        const zipContainer = createDataContainer(dataContainerCategory, attributeZip, "Postleitzahl: ", "text", attributeZip, attributeZip)

        fieldset.append(legend, emailContainer, telContainer, addressContainer, cityContainer, zipContainer);

        return fieldset;
    }


    function createSubmitBtnContainer() {
        const divSubmit = document.createElement("div");
        let submitBtn = document.createElement("input");

        divSubmit.classList.add("submit-container", "container");

        submitBtn.setAttribute("type", "submit");
        submitBtn.setAttribute("value", "Absenden!");
        divSubmit.append(submitBtn);

        return divSubmit;
    }
}

createForm();

function showProfile() {
    document.body.innerHTML = "";

    const h1 = document.createElement("h1");
    h1.setAttribute("id", "profile-ueberschrift");
    h1.textContent = `Hallo ${profile.name}`;

    const profileData = [
        { 
            data: profile.age,
            title: "Alter"
        },
        { 
            data: profile.email,
            title: "E-Mail"
        },
        { 
            data: profile.tel,
            title: "Telefonnummer"
        },
        { 
            data: profile.address,
            title: "Addresse"
        },
        { 
            data: profile.city,
            title: "Stadt"
        },
        { 
            data: profile.zipCode,
            title: "Postleitzahl"
        },
    ];
    
    
    
    document.body.append(h1);

    profileData.forEach((profile) => {
        const p = document.createElement("p");
        const span = document.createElement("span");
    
        span.textContent = profile.title;
        span.className = "bold-text";

        p.append(span, ": ",profile.data);
        document.body.append(p);
    });
}