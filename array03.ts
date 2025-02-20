const prefecture: { [key: string]: string } = {
  hokkaido: "北海道",
  aomori: "青森",
  iwate: "岩手",
};

for (let key in prefecture) {
  console.log(prefecture[key]);
}
