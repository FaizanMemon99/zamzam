import {
  Button,
  Checkbox,
  Col,
  Divider,
  Input,
  Row,
  Spin,
  Typography,
} from "antd";
import Modal from "antd/lib/modal/Modal";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CovidBanner from "../assets/images/covid_banner_web.png";
import Sedan from "../assets/images/sedan.png";
import Suv from "../assets/images/suv.png";
const Price = () => {
  const [loading, setloading] = useState(false);
  const [termsmodal, settermsmodal] = useState(false);
  const [bookmodal, setbookmodal] = useState(false);
  const [paymentmodal, setpaymentmodal] = useState(false);
  const [termscondition, settermscondition] = useState(false);
  const [bookindex, setbookindex] = useState();
  const [name, setname] = useState();
  const [email, setemail] = useState();
  const [pickuplocation, setpickuplocation] = useState();
  const data = useSelector((state) => state.data.data);
  const navigate = useNavigate();
  useEffect(() => {
    setloading(true);
    setTimeout(() => {
      setloading(false);
    }, 1000);
    console.log(Object.keys(data));
    if (!Object.keys(data).length > 0) {
      navigate("/");
    }
  }, [data]);

  let listdata = [
    {
      imgsrc: Sedan,
      actual_rate: 3988,
      discount_rate: 1994,
      text: "sedan (ac)",
      desc: "Dzire, Etios or Similar",
      included: data.packages,
      extra_fare_km: "9/Km",
      extra_fare_hour: "120/Hour",
      driver_charges: "Included",
      night_charges: "Included",
    },
    {
      imgsrc: Suv,
      actual_rate: 5878,
      discount_rate: 2939,
      text: "suv (ac)",
      desc: "Innova, Xylo, Ertiga",
      included: data.packages,
      extra_fare_km: "12/Km",
      extra_fare_hour: "120/Hour",
      driver_charges: "Included",
      night_charges: "Included",
    },
    {
      imgsrc: Sedan,
      actual_rate: 3988,
      discount_rate: 1994,
      text: "sedan (ac)",
      desc: "Dzire, Etios or Similar",
      included: data.packages,
      extra_fare_km: "9/Km",
      extra_fare_hour: "120/Hour",
      driver_charges: "Included",
      night_charges: "Included",
    },
  ];
  return (
    <>
      {loading ? (
        <div
          style={{
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Spin size="large" />
        </div>
      ) : (
        <div style={{ margin: "4rem", marginTop: "1rem" }}>
          <div className="backbutton">
            <Typography onClick={() => navigate("/")}>
              <i class="fa fa-arrow-left" aria-hidden="true"></i>
              &nbsp;&nbsp; Back
            </Typography>
          </div>

          <Row style={{ alignItems: "center", marginTop: "1rem" }}>
            <Col className="locationrow" style={{ marginRight: "1rem" }}>
              <Typography>{data.pickupcity?.toUpperCase()}</Typography>
            </Col>
            {data.status && (
              <>
                <Col>
                  <i class="fa fa-arrow-right" aria-hidden="true"></i>
                </Col>
                <Col className="locationrow" style={{ marginLeft: "1rem" }}>
                  <Typography>{data.droplocation?.toUpperCase()}</Typography>
                </Col>
              </>
            )}
          </Row>
          <div className="triptext">
            <Typography>
              {data.status
                ? data.status1
                  ? "Outstation / Round Trip"
                  : "Outstation / One Way Trip"
                : "Local"}
            </Typography>
          </div>
          <div className="tripdiv">
            <Row justify="space-between">
              <Col className="triptext">
                <Typography
                  style={{
                    textTransform: "uppercase",
                    fontSize: "1rem",
                    fontWeight: "700",
                  }}
                >
                  Trip Start
                </Typography>
              </Col>
              {data.status && (
                <Col className="triptext">
                  <Typography
                    style={{
                      textTransform: "uppercase",
                      fontSize: "1rem",
                      fontWeight: "700",
                    }}
                  >
                    Trip End
                  </Typography>
                </Col>
              )}
            </Row>
            <Row justify="space-between">
              <Col className="triptext">
                <Typography
                  style={{
                    textTransform: "uppercase",
                    fontSize: "1rem",
                    fontWeight: "700",
                    color: "blue",
                  }}
                >
                  {data.pickupdate?.split("'").join("")}
                </Typography>
              </Col>
              {data.status && (
                <Col className="triptext">
                  <Typography
                    style={{
                      textTransform: "uppercase",
                      fontSize: "1rem",
                      fontWeight: "700",
                      color: "blue",
                    }}
                  >
                    {data.dropdate?.split("'").join("")}
                  </Typography>
                </Col>
              )}
            </Row>
          </div>
          <div className="tripdiv">
            <img
              src={CovidBanner}
              alt="Covidbanner"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          <div style={{ margin: "4rem", marginTop: "2rem" }}>
            <Row>
              {listdata.map((item, index) => (
                <Col span={7} className="carcard">
                  <Row style={{ margin: "1rem 0" }}>
                    <img
                      src={item.imgsrc}
                      alt={item.text}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </Row>
                  <Row>
                    <Col span={24} className="actualrate">
                      <Typography>&#8377; {item.actual_rate}</Typography>
                    </Col>
                  </Row>
                  <Row>
                    <Col span={24} className="discountrate">
                      <Typography>&#8377; {item.discount_rate}</Typography>
                    </Col>
                  </Row>
                  <Row>
                    <Col span={24} className="cartext">
                      <Typography>{item.text}</Typography>
                    </Col>
                  </Row>
                  <Row>
                    <Col span={24} className="cardesc">
                      <Typography>{item.desc}</Typography>
                    </Col>
                  </Row>
                  <Divider />
                  <Row>
                    <Col span={12} className="columntext">
                      <Typography>Included</Typography>
                    </Col>
                    <Col span={12} className="columntext2">
                      <Typography>
                        {data.packages} Hours/{" "}
                        {data.packages === 12 ? "120Km" : "80Km"}
                      </Typography>
                    </Col>
                  </Row>
                  <Row>
                    <Col span={12} className="columntext">
                      <Typography>Extra fare/Km</Typography>
                    </Col>
                    <Col span={12} className="columntext2">
                      <Typography>&#8377; {item.extra_fare_km}</Typography>
                    </Col>
                  </Row>
                  <Row>
                    <Col span={12} className="columntext">
                      <Typography>Extra fare/Hour</Typography>
                    </Col>
                    <Col span={12} className="columntext2">
                      <Typography>&#8377; {item.extra_fare_hour}</Typography>
                    </Col>
                  </Row>
                  <Row>
                    <Col span={12} className="columntext">
                      <Typography>Driver Charges</Typography>
                    </Col>
                    <Col span={12} className="columntext2">
                      <Typography>{item.driver_charges}</Typography>
                    </Col>
                  </Row>
                  <Row>
                    <Col span={12} className="columntext">
                      <Typography>Night Charges</Typography>
                    </Col>
                    <Col span={12} className="columntext2">
                      <Typography>{item.night_charges}</Typography>
                    </Col>
                  </Row>
                  <Row
                    className="cardesc"
                    style={{ textDecoration: "underline", marginTop: "1rem" }}
                  >
                    <Col span={24}>
                      <Typography
                        style={{ fontSize: "1rem", fontWeight: "bolder" }}
                        onClick={() => settermsmodal(true)}
                      >
                        Other Terms
                      </Typography>{" "}
                    </Col>
                    <Modal
                      title="Basic Modal"
                      visible={termsmodal}
                      onOk={() => settermsmodal(false)}
                      onCancel={() => settermsmodal(false)}
                      title="Other Charges and Taxes"
                    >
                      <p>- Vehicle and fuel charges included</p>
                      <p>- Driver Night Charges included</p>
                      <p>- 5% GST Extra</p>
                      <p>
                        - Included Kilometers will start from pickup location
                      </p>
                      <p>
                        - Kilometers will count from pickup location to pickup
                        location
                      </p>
                      <p>
                        - Driver allowance includes driver's stay, food and
                        night charges
                      </p>
                      <p>- Toll and state tax extra</p>
                      <p>- Parking charges extra if applicable</p>
                      <p>- AC will remain switch off in hill areas</p>
                      <p>
                        - Customer need to arrange E-Pass and COVID report if
                        its required for your trip
                      </p>
                      <p>
                        - Rohtang Pass needs special permit and is not included
                        in any trip
                      </p>
                    </Modal>
                  </Row>
                  <Divider />
                  <Row justify="center">
                    <Col span={20}>
                      <Button
                        shape="square"
                        size="large"
                        style={{
                          width: "100%",
                          color: "red",
                          fontWeight: "bolder",
                          border: "2px solid",
                          borderRadius: "4px",
                        }}
                        onClick={() => {
                          setbookmodal(true);
                          setbookindex(index);
                        }}
                      >
                        Book now
                      </Button>
                      <Modal
                        title="Basic Modal"
                        visible={bookmodal}
                        footer={false}
                        onOk={() => setbookmodal(false)}
                        onCancel={() => setbookmodal(false)}
                        title="Fill Contact Details"
                      >
                        <div className="subdiv">
                          <Typography>Phone</Typography>
                          <Input
                            size="large"
                            defaultValue={data.phone}
                            placeholder="Phone Number"
                            prefix={<i class="fa fa-phone"></i>}
                          />
                          <Typography>Your Name</Typography>
                          <Input
                            onChange={(e) => setname(e.target.value)}
                            size="large"
                            placeholder="Your Name"
                            prefix={
                              <i class="fa fa-italic" aria-hidden="true"></i>
                            }
                          />
                          <Typography>Email</Typography>
                          <Input
                            size="large"
                            onChange={(e) => setemail(e.target.value)}
                            placeholder="Email Address"
                            prefix={<i class="fa fa-envelope"></i>}
                          />
                          <Typography>Pickup Address</Typography>
                          <Input
                            size="large"
                            onChange={(e) => setpickuplocation(e.target.value)}
                            placeholder="Pickup Address"
                            prefix={<i class="fa fa-location-arrow"></i>}
                          />
                          <Checkbox
                            style={{ marginTop: "1rem" }}
                            onChange={settermscondition}
                          >
                            I agree with Terms and Conditions of this service
                          </Checkbox>
                          <Row>
                            <Col span={24}>
                              <Button
                                primary
                                style={{
                                  width: "100%",
                                  background: "red",
                                  color: "#fff",
                                  fontWeight: "700",
                                  marginTop: "1rem",
                                }}
                                onClick={() =>
                                  name &&
                                  data.phone &&
                                  email &&
                                  pickuplocation &&
                                  termscondition
                                    ? setpaymentmodal(true)
                                    : alert(
                                        "Please fill all fields and accept terms and conditions"
                                      )
                                }
                              >
                                Pay &#8377; {listdata[bookindex]?.discount_rate}{" "}
                                & Book
                              </Button>
                            </Col>
                          </Row>
                        </div>
                      </Modal>
                      <Modal
                        visible={paymentmodal}
                        title="Payments"
                        onOk={() => {
                          alert("Your booking has been confirmed");
                          navigate("/");
                        }}
                        onCancel={() => setpaymentmodal(false)}
                      >
                        <h1>Payment Methods</h1>
                      </Modal>
                    </Col>
                  </Row>
                </Col>
              ))}
            </Row>
          </div>
        </div>
      )}{" "}
    </>
  );
};

export default Price;
