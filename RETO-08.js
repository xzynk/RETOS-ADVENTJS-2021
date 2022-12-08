/*
* Invertir en criptomonedas es casi un deporte de riesgo.
* El otro d�a hackearon Bitmart y ha hecho que el valor de Bitcoin, y otras monedas, bajase un 25%.
* Vamos a escribir una funci�n que reciba la lista de precios de una criptomoneda en un d�a y debemos devolver
* la ganancia m�xima que podr�amos sacar si compramos y vendemos la inversi�n el mismo d�a.
* La lista de precios es un array de n�meros y representa el tiempo de izquierda a derecha.
* Por lo que ten en cuenta que no puedes comprar a un precio que est� a la derecha de la venta y no puedes vender a un precio que est� a la izquierda de la compra.
* Por ejemplo:
*
* const pricesBtc = [39, 18, 29, 25, 34, 32, 5]
* maxProfit(pricesBtc) // -> 16 (compra a 18, vende a 34)
* const pricesEth = [10, 20, 30, 40, 50, 60, 70]
* maxProfit(pricesEth) // -> 60 (compra a 10, vende a 70)
*
* Si ese d�a no se puede sacar ning�n beneficio, tenemos que devolver -1 para evitar que hagamos una locura:
*
* const pricesDoge = [18, 15, 12, 11, 9, 7]
* maxProfit(pricesDoge) = // -> -1 (no hay ganancia posible)
* const pricesAda = [3, 3, 3, 3, 3]
* maxProfit(pricesAda) = // -> -1 (no hay ganancia p
*
* */

function maxProfit(prices) {
  let minValue = Infinity;
  let maxProfit = -1;

  for (const price of prices) {
    minValue = Math.min(minValue, price);
    maxProfit = Math.max(maxProfit, price - minValue);
  }

  return maxProfit <= 0 ? -1 : maxProfit;
}

const pricesBtc = [39, 18, 29, 25, 34, 32, 5]

maxProfit(pricesBtc)