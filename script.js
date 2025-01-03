        const formSection = document.getElementById('formSection');
        const listSection = document.getElementById('listSection');
        const productForm = document.getElementById('productForm');
        const productNameInput = document.getElementById('productName');
        const productDescriptionInput = document.getElementById('productDescription');
        const productValueInput = document.getElementById('productValue');
        const productAvailableInput = document.getElementById('productAvailable');
        const productTableBody = document.getElementById('productTableBody');
        const newProductButton = document.getElementById('newProductButton');

        const products = []; 

        function toggleSections(showForm) {
            if (showForm) {
                formSection.style.display = 'block';
                listSection.style.display = 'none';
            } else {
                formSection.style.display = 'none';
                listSection.style.display = 'block';
            }
        }

        toggleSections(true);

        productForm.addEventListener('submit', (event) => {
            event.preventDefault();

            const name = productNameInput.value.trim();
            const description = productDescriptionInput.value.trim();
            const value = parseFloat(productValueInput.value);
            const available = productAvailableInput.value;

            if (name && description && !isNaN(value)) {
                products.push({ name, description, value, available });
                products.sort((a, b) => a.value - b.value); 

                updateTable();
                toggleSections(false); 
                productForm.reset(); 
            }
        });

        function updateTable() {
            productTableBody.innerHTML = ''; 

            products.forEach(product => {
                const row = document.createElement('tr');

                const nameCell = document.createElement('td');
                nameCell.textContent = product.name;
                row.appendChild(nameCell);

                const valueCell = document.createElement('td');
                valueCell.textContent = product.value.toFixed(2);
                row.appendChild(valueCell);

                productTableBody.appendChild(row);
            });
        }

        newProductButton.addEventListener('click', () => {
            toggleSections(true);
        });