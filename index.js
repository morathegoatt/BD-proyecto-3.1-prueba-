// En tu archivo index.js

import { supabase } from './supabaseClient.js';

async function obtenerPerifericos() {
    
    // 1. Busca el contenedor en el HTML (igual que antes)
    const contenedor = document.getElementById('lista-perifericos');

    // 2. Realiza la consulta a Supabase (igual que antes)
    const { data, error } = await supabase
        .from('perifericos')
        .select('*');

    // 3. Maneja el error (igual que antes)
    if (error) {
        console.error('Hubo un error:', error);
        contenedor.innerHTML = `<p>Error al cargar los datos: ${error.message}</p>`;
        return;
    }

    // 4. ¡NUEVA TABLA! Ajustada a tus columnas
    if (data && data.length > 0) {
        
        let tablaHTML = '<table border="1">';
        
        // Encabezados de la tabla
        tablaHTML += `
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Marca</th>
                    <th>Tipo</th>
                    <th>Precio</th>
                    <th>Stock</th>
                </tr>
            </thead>
        `;
        
        // Cuerpo de la tabla (un renglón <tr> por cada producto)
        tablaHTML += '<tbody>';
        for (const producto of data) {
            tablaHTML += `
                <tr>
                    <td>${producto.id}</td>
                    <td>${producto.nombre}</td>
                    <td>${producto.marca}</td>
                    <td>${producto.tipo}</td>
                    <td>$${producto.precio}</td>
                    <td>${producto.stock}</td>
                </tr>
            `;
        }
        tablaHTML += '</tbody></table>';

        // 5. Inserta el HTML generado (igual que antes)
        contenedor.innerHTML = tablaHTML;

    } else {
        // Mensaje por si la tabla está vacía
        contenedor.innerHTML = '<p>No se encontraron periféricos en la base de datos.</p>';
    }
}

// Llama a la función
obtenerPerifericos();