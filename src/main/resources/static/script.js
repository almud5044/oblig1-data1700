let billetter = [];

function validerFornavn() {
    const fornavnInput = document.getElementById('fornavn');
    const fornavnError = document.getElementById('fornavnError');
    const regex = /^[a-zA-Z]+$/; // Regulært uttrykk for kun bokstaver

    if (!regex.test(fornavnInput.value.trim())) {
        fornavnError.textContent = 'Fornavn kan kun inneholde bokstaver';
        return false;
    } else {
        fornavnError.textContent = '';
        return true;
    }
}

function validerEtternavn() {
    const etternavnInput = document.getElementById('etternavn');
    const etternavnError = document.getElementById('etternavnError');
    const regex = /^[a-zA-Z]+$/; // Regulært uttrykk for kun bokstaver

    if (!regex.test(etternavnInput.value.trim())) {
        etternavnError.textContent = 'Etternavn kan kun inneholde bokstaver';
        return false;
    } else {
        etternavnError.textContent = '';
        return true;
    }
}

function validerTelefon() {
    const telefonInput = document.getElementById('telefon');
    const telefonError = document.getElementById('telefonError');
    const telefonRegex = /^\d{8}$/;

    if (!telefonRegex.test(telefonInput.value.trim())) {
        telefonError.textContent = 'Telefonnummer må være 8 siffer';
        return false;
    } else {
        telefonError.textContent = '';
        return true;
    }
}

function validerEpost() {
    const epostInput = document.getElementById('epost');
    const epostError = document.getElementById('epostError');
    const epostRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!epostRegex.test(epostInput.value.trim())) {
        epostError.textContent = 'Ugyldig e-postadresse';
        return false;
    } else {
        epostError.textContent = '';
        return true;
    }
}

function validerAntall() {
    const antallInput = document.getElementById('antall');
    const antallError = document.getElementById('antallError');

    if (antallInput.value.trim() === '' || isNaN(antallInput.value) || parseInt(antallInput.value) <= 0) {
        antallError.textContent = 'Antall må være et positivt tall';
        return false;
    } else {
        antallError.textContent = '';
        return true;
    }
}


function validerAlleFelter() {
    const validerFornavnResultat = validerFornavn();
    const validerEtternavnResultat = validerEtternavn();
    const validerTelefonResultat = validerTelefon();
    const validerEpostResultat = validerEpost();
    const validerAntallResultat = validerAntall();

    return validerFornavnResultat && validerEtternavnResultat && validerTelefonResultat && validerEpostResultat && validerAntallResultat;
}


function kjopBillett() {
    if (!validerAlleFelter()) {
        return;
    }

    const valgtFilm = document.getElementById('film').value;
    if (valgtFilm === "") {
        const filmError = document.getElementById('filmError');
        filmError.textContent = 'Vennligst velg en film';
        return;
    }

    const antall = parseInt(document.getElementById('antall').value);
    const fornavn = document.getElementById('fornavn').value;
    const etternavn = document.getElementById('etternavn').value;
    const telefon = document.getElementById('telefon').value;
    const epost = document.getElementById('epost').value;

    const billett = {
        film: valgtFilm,
        antall: antall,
        fornavn: fornavn,
        etternavn: etternavn,
        telefon: telefon,
        epost: epost
    };

    billetter.push(billett);
    visBilletter();
    resetInputFelter();
}


function slettAlleBilletter() {
    billetter = [];
    visBilletter();
}

function visBilletter() {
    const billettListe = document.getElementById('billettListe');
    billettListe.innerHTML = '';

    billetter.forEach(billett => {
        const li = document.createElement('li');
        li.textContent = `Film: ${billett.film}, Antall: ${billett.antall}, Navn: ${billett.fornavn} ${billett.etternavn}, Telefon: ${billett.telefon}, E-post: ${billett.epost}`;
        billettListe.appendChild(li);
    });
}

function resetInputFelter() {
    document.getElementById('film').value = 'film1';
    document.getElementById('antall').value = '';
    document.getElementById('fornavn').value = '';
    document.getElementById('etternavn').value = '';
    document.getElementById('telefon').value = '';
    document.getElementById('epost').value = '';
}

