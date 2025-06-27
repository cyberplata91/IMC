document.addEventListener('DOMContentLoaded', function() {
    // Elementos del DOM
    const imcForm = document.getElementById('imcForm');
    const resultadoDiv = document.getElementById('resultado');
    const imcValueSpan = document.getElementById('imcValue');
    const estadoSpan = document.getElementById('estado');
    const btnLimpiar = document.getElementById('btnLimpiar');
    const pesoInput = document.getElementById('peso');
    const alturaInput = document.getElementById('altura');

    // Función para calcular el IMC
    function calcularIMC(peso, altura) {
        return peso / Math.pow(altura, 2);
    }

    // Función para determinar el estado según IMC
    function obtenerEstado(imc) {
        if (imc < 15) return 'Delgadez muy severa';
        else if (imc < 16) return 'Delgadez severa';
        else if (imc < 18.5) return 'Delgadez';
        else if (imc < 25) return 'Normal';
        else if (imc < 30) return 'Sobrepeso';
        else if (imc < 35) return 'Obesidad moderada';
        else if (imc < 40) return 'Obesidad severa';
        else return 'Obesidad mórbida';
    }

    // Manejo del evento submit del formulario
    imcForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Obtener valores
        const peso = parseFloat(pesoInput.value);
        const altura = parseFloat(alturaInput.value);
        
        // Validación
        if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
            alert('Por favor ingrese valores válidos');
            return;
        }
        
        // Calcular IMC
        const imc = calcularIMC(peso, altura);
        
        // Obtener estado
        const estado = obtenerEstado(imc);
        
        // Mostrar resultados
        imcValueSpan.textContent = imc.toFixed(2);
        estadoSpan.textContent = estado;
        resultadoDiv.style.display = 'block';
    });

    // Botón para limpiar resultados
    btnLimpiar.addEventListener('click', function() {
        resultadoDiv.style.display = 'none';
        imcValueSpan.textContent = '';
        estadoSpan.textContent = '';
    });
});
