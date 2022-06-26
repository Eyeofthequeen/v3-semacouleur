function ouvrir_tunnel(nom_balise_html, chemin_document) {
        fetch(chemin_document)
            .then(response => {
                        return response.text()
                    })
            .then(data => {
                        document.querySelector(nom_balise_html).innerHTML = data;
                    });
}


ouvrir_tunnel("footer", "./templates/footer.html");
