export const getWishList = () =>
  window.localStorage.getItem("wishlist")
    ? window.localStorage.getItem("wishlist").split(",")
    : [];

export const manageWishList = (id) => {
  const wishList = getWishList();
  if (wishList.includes(id))
    window.localStorage.wishlist = wishList.filter((item) => item !== id);
  else window.localStorage.wishlist = [...wishList, id];
};
