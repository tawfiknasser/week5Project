// pure functions
const test = require("tape");
const functions = require("./functions");

test("tape test", t => {
  let num = 1;
  t.equl(num, 1, "should return equal");
  t.end();
});
test("should return UA", t => {
  let Country = "Ukraine";
  supertest(searchCountry);
  .expected("UA")
  .end((err, res) => {
    t.error(err);
    t.equal(Country, "Ukraine", "should return UA");
    t.end();
  });
})
