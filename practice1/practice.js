// $(document).ready(function () {console.log("hello")})

$(document).ready(function () {

    $('.add-to-cart').click(function () {
      const productDiv = $(this).closest('.product');
      const id = productDiv.data('id');
      const name = productDiv.data('name');
      const price = +productDiv.data('price');
  
      // Check if item already in cart
      let row = $('#cart-items tbody').find(`tr[data-id='${id}']`);
      if (row.length > 0) {
        // Increase quantity
        let qtyCell = row.find('.qty');
        let qty = parseInt(qtyCell.text());
        qty++;
        qtyCell.text(qty);
        // Update price (price * qty)
        row.find('.price').text(`$${(price * qty).toFixed(2)}`);
      } else {
        // Add new row
        let newRow = `<tr data-id="${id}">
                        <td>${name}</td>
                        <td class="qty">1</td>
                        <td class="price">$${price.toFixed(2)}</td>
                        <td><button class="remove-item">Remove</button></td>
                      </tr>`;
        $('#cart-items tbody').append(newRow);
      }
  
      updateTotal();
    });
  
    // Remove item from cart
    $('#cart-items').on('click', '.remove-item', function () {
      $(this).closest('tr').remove();
      updateTotal();
    });
  
    function updateTotal() {
      let total = 0;
      $('#cart-items tbody tr').each(function () {
        const priceText = $(this).find('.price').text();
        total += parseFloat(priceText.replace('$', ''));
      });
      $('#cart-total').text(`Total: $${total.toFixed(2)}`);
    }
  });
  

// $(function () {
//     $('.add-to-cart').click(function () {
//       const product = $(this).closest('.product');
//       const id = product.data('id');
//       const name = product.data('name');
//       const price = +product.data('price');
  
//       let row = $(`#cart-items tbody tr[data-id="${id}"]`);
//       if (row.length) {
//         let qtyCell = row.find('.qty');
//         let qty = +qtyCell.text() + 1;
//         qtyCell.text(qty);
//         row.find('.price').text(`$${(price * qty).toFixed(2)}`);
//       } else {
//         $('#cart-items tbody').append(`
//           <tr data-id="${id}">
//             <td>${name}</td>
//             <td class="qty">1</td>
//             <td class="price">$${price.toFixed(2)}</td>
//             <td><button class="remove-item">Remove</button></td>
//           </tr>
//         `);
//       }
//       updateTotal();
//     });
  
//     $('#cart-items').on('click', '.remove-item', function () {
//       $(this).closest('tr').remove();
//       updateTotal();
//     });
  
//     function updateTotal() {
//         let total = 0;
//         $('#cart-items tbody tr').each(function () {
//           const priceText = $(this).find('.price').text().replace('$', '');
//           total += +priceText || 0; // Using + instead of parseFloat
//         });
//         $('#cart-total').text(`Total: $${total.toFixed(2)}`);
//       }
      
//     })