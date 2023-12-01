        function appendToDisplay(value) {
            const display = document.getElementById('display');
            const currentInput = display.value;

            if (value === 'C') {
                display.value = '  ';
            } else {
                
                if (value === '.' && currentInput.includes('.')) {
                    return;
                }

                display.value += value;
            }
        }

        function calculate() {
            const display = document.getElementById('display');
            try {
                display.value = eval(display.value);
            } catch (error) {
                display.value = 'Error';
            }
        }

        function clearDisplay() {
            document.getElementById('display').value = ' ';
        }
        function deleteLastChar() {
            const display = document.getElementById('display');
            display.value = display.value.slice(0, -1);
        }