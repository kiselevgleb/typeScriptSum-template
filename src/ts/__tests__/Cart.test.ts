import Cart from '../service/Cart';
import MusicAlbum from '../domain/MusicAlbum';

test('new card should be empty', () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});
test('test allPrice', () => {
  const cart = new Cart();
  const ma1 = new MusicAlbum(1, "11", "111", 10);
  const ma2 = new MusicAlbum(2, "22", "222", 20);
  cart.add(ma1);
  cart.add(ma2);
  expect(cart.allPrice()).toBe(30);
});
test('test allPrice', () => {
  const cart = new Cart();
  const ma1 = new MusicAlbum(1, "11", "111", 10);
  const ma2 = new MusicAlbum(2, "22", "222", 20);
  cart.add(ma1);
  cart.add(ma2);
  expect(cart.allPriceWithDis(10)).toBe(27);
});