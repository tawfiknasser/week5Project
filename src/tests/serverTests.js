//using supertest & tape

const test = require("tape");
const router = require("../router");
const supertest = require("supertest");

test("Initialize", t => {
  let num = 2;
  t.equal(num, 2, "should return 2");
  t.end();
});
test("should return 200", t => {
  supertest(router)
    .get("/")
    .expect(200)
    .expect("Content-Type", /html/)
    .end((err, res) => {
      t.error(err);
      t.equal(res.statusCode, 200, "should return 200");
      t.end();
    });
});
test("should return 404", t => {
  supertest(router)
    .get("/jfiejow")
    .expect(404)
    .expect("Content-Type", /html/)
    .end((err, res) => {
      t.error(err);
      t.equal(res.statusCode, 404, "should respond with page not found");
      t.end();
    });
});
test("assets 200 html", t => {
  supertest(router)
    .get("/index.html")
    .expect(200)
    .expect("Content-Type", /html/)
    .end((err, res) => {
      t.error(err);
      t.equal(res.statusCode, 200, "should return 200");
      t.end();
    });
});
test("assets 200 css", t => {
  supertest(router)
    .get("/style.css")
    .expect(200)
    .expect("Content-Type", /css/)
    .end((err, res) => {
      t.error(err);
      t.equal(res.statusCode, 200, "should return 200");
      t.end();
    });
});

test("handler 500", t => {
  supertest(router)
    .get("/Test500")
    .expect(500)
    .expect("Content-Type", /text/)
    .end((err, res) => {
      t.error(err);
      t.equal(res.statusCode, 500, "should return 500");
      t.end();
    });
});
