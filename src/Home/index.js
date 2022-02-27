import {
  Button,
  Col,
  DatePicker,
  Divider,
  Input,
  Row,
  Select,
  Typography,
} from "antd";
import Ooty from "../assets/images/ooty.png";
import Shirdi from "../assets/images/shirdi.png";
import Manali from "../assets/images/delhi-manali.jpg";
import Haridwar from "../assets/images/haridwar.png";
import Car from "../assets/images/car.png";
import Bill from "../assets/images/bill.png";
import car1 from "../assets/images/car1.png";
import car2 from "../assets/images/car2.png";
import car3 from "../assets/images/car3.png";
import car4 from "../assets/images/car4.png";
import Logo from "../assets/icon/default-monochrome-white.svg";

import Reliable from "../assets/images/reliable.png";
import DriverCircle from "../assets/images/driver-circle.png";
import React, { useState, useEffect } from "react";
import TextArea from "antd/lib/input/TextArea";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import { useDispatch } from "react-redux";
import { setData } from "../redux/dataSlice";

const Home = () => {
  const [status, setstatus] = useState(true);
  const [status1, setstatus1] = useState(true);
  const [pickupdate, setpickupdate] = useState(moment(new Date()));
  const [dropdate, setdropdate] = useState(moment(new Date()));
  const [phone, setphone] = useState();
  const [pickupcity, setpickupcity] = useState();
  const [packages, setpackages] = useState();
  const [destination, setdestination] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    setpickupcity("");
    setphone("");
    setpickupdate(new Date());
    setdropdate(new Date());
    setdestination("");
  }, [status, status1]);
  const searchfn = () => {
    if (status && status1) {
      if (
        pickupcity &&
        phone &&
        pickupdate &&
        dropdate &&
        destination &&
        status &&
        status1
      ) {
        console.log("first1", {
          pickupcity,
          phone,
          pickupdate,
          dropdate,
          destination,
          status,
          status1,
        });
        let a = "'" + moment(pickupdate).toDate() + "'";
        let b = "'" + moment(dropdate).toDate() + "'";
        dispatch(
          setData({
            pickupcity,
            phone,
            droplocation: destination,
            status,
            pickupdate: a,
            dropdate: b,
            status1,
          })
        );
        navigate("/price");
      }
      else alert('Pleaswe fill all the fields')
    } else if (status && !status1) {
      if (
        pickupcity &&
        phone &&
        pickupdate &&
        destination &&
        status &&
        !status1
      ) {
        let a = "'" + moment(pickupdate).toDate() + "'";
        dispatch(
          setData({
            pickupcity,
            phone,
            droplocation: destination,
            status,
            pickupdate: a,
            status1,
          })
        );
        navigate("/price");
      }
      else alert('Pleaswe fill all the fields')
    } else {
      if (pickupcity && phone && pickupdate && packages) {
        let a = "'" + moment(pickupdate).toDate() + "'";
        dispatch(
          setData({
            pickupcity,
            phone,
            packages,
            status,
            pickupdate: a,
            status1,
          })
        );
        navigate("/price");
      }
      else alert('Pleaswe fill all the fields')
    }
  };
  return (
    <>
      <div className="maindiv">
        <Row className="imagebackground">
          <Col
            span={14}
            style={{
              textAlign: "center",
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              padding: "4rem",
            }}
          >
            <Row className="testimonialrow">
              <Col>
                <Typography>"Best price. Good customer service."</Typography>
                <Typography>- Himani Tomer</Typography>
              </Col>
            </Row>
            <Row className="testimonialrow">
              <Col>
                <Typography>
                  "Got driver details just after booking."
                </Typography>
                <Typography>- Vikrant Thakur</Typography>
              </Col>
            </Row>
            <Row className="testimonialrow">
              <Col>
                <Typography>
                  "Impressed with simple pricing. No waiting charge, night
                  charge, driver charge etc."
                </Typography>
                <Typography>- Shivani</Typography>
              </Col>
            </Row>
            <Row className="testimonialrow">
              <Col>
                <Typography>
                  "Recommends everyone who needs outstation taxi."
                </Typography>
                <Typography>- Mariyyanpan Iyer</Typography>
              </Col>
            </Row>
          </Col>
          <Col span={10} style={{ padding: "4rem" }}>
            <div className="locationbox">
              <Row style={{ marginBottom: -3 }}>
                <Col
                  span={12}
                  style={{
                    padding: "1rem",
                    paddingBottom: "0.5rem",
                    textAlign: "center",
                    borderBottom: status && "4px solid blue",
                    cursor: "pointer",
                  }}
                  onClick={() => setstatus(!status)}
                >
                  <Typography style={{ fontWeight: status ? 700 : 300 }}>
                    Outstation
                  </Typography>
                </Col>
                <Col
                  span={12}
                  style={{
                    padding: "1rem",
                    textAlign: "center",
                    paddingBottom: "0.5rem",
                    borderBottom: !status && "4px solid blue",
                    cursor: "pointer",
                  }}
                  onClick={() => setstatus(!status)}
                >
                  <Typography style={{ fontWeight: !status ? 700 : 300 }}>
                    Local
                  </Typography>
                </Col>
              </Row>
              <Divider
                style={{ marginTop: 0, marginBottom: !status ? 10 : 0 }}
              />
              {status && (
                <>
                  <Row style={{ marginBottom: -3 }}>
                    <Col
                      span={12}
                      style={{
                        padding: "1rem",
                        paddingBottom: "0.5rem",
                        textAlign: "center",
                        borderBottom: status1 && "4px solid red",
                        cursor: "pointer",
                      }}
                      onClick={() => setstatus1(!status1)}
                    >
                      <Typography style={{ fontWeight: status1 ? 700 : 300 }}>
                        Round Trip
                      </Typography>
                    </Col>
                    <Col
                      span={12}
                      style={{
                        padding: "1rem",
                        textAlign: "center",
                        paddingBottom: "0.5rem",
                        borderBottom: !status1 && "4px solid red",
                        cursor: "pointer",
                      }}
                      onClick={() => setstatus1(!status1)}
                    >
                      <Typography style={{ fontWeight: !status1 ? 700 : 300 }}>
                        One Way Trip
                      </Typography>
                    </Col>
                  </Row>
                  <Divider style={{ marginTop: 0 }} />
                </>
              )}
              <Typography
                style={{
                  width: "100%",
                  textAlign: "center",
                  paddingBottom: 24,
                }}
              >
                {status
                  ? status1
                    ? "Round trip / Multi-City Trip"
                    : "One Way Trip"
                  : null}
              </Typography>
              <div className="subdiv">
                <Typography>
                  Pickup City{" "}
                  <span style={{ fontStyle: "italic" }}>
                    * just city is enough
                  </span>
                </Typography>
                <Input
                  size="large"
                  placeholder="Pickup City"
                  value={pickupcity}
                  onChange={(e) => setpickupcity(e.target.value)}
                  prefix={<i class="fa fa-location-arrow"></i>}
                />
                {status ? (
                  <>
                    <Typography style={{ marginTop: 10 }}>
                      Next Destination
                    </Typography>
                    <Input
                      size="large"
                      placeholder="Next Destination"
                      onChange={(e) => setdestination(e.target.value)}
                      value={destination}
                      prefix={<i class="fa fa-location-arrow"></i>}
                    />
                  </>
                ) : (
                  <>
                    <Typography style={{ marginTop: 10 }}>Package</Typography>
                    <Select
                      defaultValue="package"
                      style={{ width: "100%", marginTop: 10 }}
                      onChange={setpackages}
                    >
                      <Select.Option value="package" disabled>
                        --- Select Package ---
                      </Select.Option>
                      <Select.Option value="8">8 hours, 80 Km</Select.Option>
                      <Select.Option value="12">12 hours, 120 Km</Select.Option>
                    </Select>
                  </>
                )}
                <Typography style={{ marginTop: 10 }}>
                  Select Pickup Date & Time
                </Typography>
                {/* <Input
                      size="large"
                      placeholder="Next Destination"
                      prefix={<i class="fa fa-location-arrow"></i>}
                    /> */}
                <DatePicker
                  showTime
                  placeholder="Select pickup date and time"
                  value={moment(pickupdate)}
                  format={"DD/MM/YYYY hh:mm"}
                  allowClear={false}
                  onChange={setpickupdate}
                  suffixIcon={<i class="fa fa-calendar" aria-hidden="true"></i>}
                  // onOk={}
                />
                {status
                  ? status1 && (
                      <>
                        <Typography style={{ marginTop: 10 }}>
                          Select Drop Date & Time
                        </Typography>

                        <DatePicker
                          showTime
                          value={moment(dropdate)}
                          onChange={setdropdate}
                          format={"DD/MM/YYYY hh:mm"}
                          allowClear={false}
                          placeholder="Select Drop Date and Time"
                          suffixIcon={
                            <i class="fa fa-calendar" aria-hidden="true"></i>
                          }
                        />
                      </>
                    )
                  : null}
                <Typography style={{ marginTop: 10 }}>Phone</Typography>
                <Input
                  size="large"
                  type={"number"}
                  placeholder="Mobile Number"
                  value={phone}
                  onChange={(e) => setphone(e.target.value)}
                  prefix={<i class="fa fa-phone"></i>}
                />
              </div>
              <Divider style={{ marginTop: 0, marginBottom: "0.5rem" }} />
              <div style={{ width: "100%", textAlign: "center" }}>
                <Button
                  type="primary"
                  shape="round"
                  size="large"
                  style={{ marginBottom: "0.5rem" }}
                  onClick={() => searchfn()}
                >
                  Search
                </Button>
              </div>
            </div>
          </Col>
        </Row>
        <div className="headertext" style={{ paddingTop: "2rem" }}>
          <Typography>Best Outstation Taxi Service in India</Typography>
        </div>
        <div className="headertext">
          <Typography style={{ fontSize: "2.5rem" }}>
            Let's talk{" "}
            <span style={{ color: "red", fontStyle: "italic" }}>ZamZam</span>{" "}
            carrent
          </Typography>
        </div>
        <div className="section">
          <Row>
            <Col span={6} className="sectiondiv">
              <div>
                <i class="fa fa-repeat" aria-hidden="true"></i>
              </div>
              <Typography className="firsttext">No return fare</Typography>
              <Typography className="secondtext">
                Why pay double for One way cab! Taxi providers are ready for one
                way fare as they are getting another customer for return.
              </Typography>
            </Col>
            <Col span={6} className="sectiondiv">
              <div>
                <i class="fa fa-money" aria-hidden="true"></i>
              </div>
              <Typography className="firsttext">No over-pricing</Typography>
              <Typography className="secondtext">
                Get cheapest price for your journey. A big pool of outstation
                taxi providers are waiting to serve you best in least price.
              </Typography>
            </Col>
            <Col span={6} className="sectiondiv">
              <div>
                <i class="fa fa-truck" aria-hidden="true"></i>
              </div>
              <Typography className="firsttext">Cabs availability</Typography>
              <Typography className="secondtext">
                Holiday season! Your favourite taxi provider is refusing to
                provide a cab. No worries, CabBazar brings thousands of taxi
                providers in your reach.
              </Typography>
            </Col>
            <Col span={6} className="sectiondiv">
              <div>
                <i class="fa fa-university" aria-hidden="true"></i>
              </div>
              <Typography className="firsttext">Own Taxi?</Typography>
              <Typography className="secondtext">
                No more off-season, no more idle cabs. Get all your cabs earning
                for you throughout the year by providing top class service and
                least price to customers at CabBazar.
              </Typography>
            </Col>
          </Row>
        </div>
        <div className="secondsection">
          <div className="headertext" style={{ paddingTop: "2rem" }}>
            <Typography>Popular Destinations</Typography>
          </div>
          <Row style={{ marginTop: "5rem" }}>
            <Col span={6}>
              <img src={Ooty} alt="ooty" />
              <Typography className="secondsectiontext">
                Taxi from Bangalore to Ooty
              </Typography>
            </Col>
            <Col span={6}>
              <img src={Shirdi} alt="mumbai" />
              <Typography className="secondsectiontext">
                Taxi from Mumbai to Shirdi
              </Typography>
            </Col>
            <Col span={6}>
              <img src={Manali} alt="delhi" />
              <Typography className="secondsectiontext">
                Taxi from Delhi to Manali
              </Typography>
            </Col>
            <Col span={6}>
              <img src={Haridwar} alt="delhi" />
              <Typography className="secondsectiontext">
                Taxi from Delhi to Haridwar
              </Typography>
            </Col>
          </Row>
        </div>
        <div className="whydiv" style={{ background: "#fff" }}>
          <div className="headertext" style={{ paddingTop: "2rem" }}>
            <Typography>
              Why <span style={{ color: "red" }}>ZamZam</span> Car Rental?
            </Typography>
          </div>
          <Typography className="whyparagraph">
            Cab Bazar is leading outstation taxi provider in India. We strive to
            make the taxi booking an easy and comfortable experience through our
            online cab booking service. Wherever you travel in India, we have
            got a cab for you. You can choose from a small hatchback car or
            comfortable sedan (Dzire, Etios) car or an suv (Innova, Xylo), if
            you are big family or even Tempo-traveller if you are large travel
            group. We assure you of clean cars in good condition, courteous
            drivers with good knowledge of the tourist places, very competitive
            prices, transparent automatic billing and a very reliable service in
            totality. With Cab Bazar, you need not to wait for car and driver
            details till last hours. Instead you will get the details within few
            minutes of booking your outstation cab. So, enjoy your vacations to
            fullest. Instead of driving, hire outstation cabs from Cab Bazar and
            sit back & relax, take fresh air, experience various local culture
            during the trip, have stop-overs as per convenience.{" "}
            <span style={{ color: "#222" }}>After all, it's your own cab!</span>
          </Typography>
          <Row style={{ marginTop: "5rem" }}>
            <Col span={6}>
              <img src={Car} alt="car" />
              <Typography className="secondsectiontext">Clean Car</Typography>
            </Col>
            <Col span={6}>
              <img src={Bill} alt="bill" />
              <Typography className="secondsectiontext">
                Transparent Billing
              </Typography>
            </Col>
            <Col span={6}>
              <img src={Reliable} alt="delhi" />
              <Typography className="secondsectiontext">
                Reliable Service
              </Typography>
            </Col>
            <Col span={6}>
              <img src={DriverCircle} alt="delhi" />
              <Typography className="secondsectiontext">
                Courteous Drivers
              </Typography>
            </Col>
          </Row>
        </div>
        <Row className="mapimagebackground">
          <div
            className="locationbox contactus"
            style={{ width: "100%", margin: "5rem 15rem" }}
          >
            <Typography
              style={{
                fontSize: "2rem",
                margin: 20,
                fontWeight: 300,
                textAlign: "center",
              }}
            >
              Contact Us
            </Typography>
            <div className="subdiv">
              <Typography style={{ margin: "1rem 0" }}>Name</Typography>
              <Input
                size="large"
                placeholder="Name"
                // prefix={<i class="fa fa-location-arrow"></i>}
              />
              <Typography style={{ margin: "1rem 0" }}>
                Email Address
              </Typography>
              <Input
                size="large"
                placeholder="Email"
                // prefix={<i class="fa fa-location-arrow"></i>}
              />
              <Typography style={{ margin: "1rem 0" }}>Phone</Typography>
              <Input
                size="large"
                type={"number"}
                placeholder="Mobile Number"
                // prefix={<i class="fa fa-phone"></i>}
              />
              <Typography style={{ margin: "1rem 0" }}>Your Message</Typography>
              <TextArea
                size="large"
                rows={4}
                placeholder="Tell us your thoughts and feelings..."
                // prefix={<i class="fa fa-phone"></i>}
              />
            </div>
            <Divider style={{ marginTop: 0, marginBottom: "0.5rem" }} />
            <div style={{ width: "100%", textAlign: "center" }}>
              <Button
                type="primary"
                shape="round"
                size="large"
                style={{ marginBottom: "0.5rem" }}
                onClick={() =>
                  alert(
                    "Thank you for your response, our executive will connect you soon."
                  )
                }
              >
                Send Message
              </Button>
            </div>
          </div>
        </Row>
        <div className="luxurydiv">
          <div className="headertext" style={{ paddingTop: "2rem" }}>
            <Typography>Our Luxury Fleet</Typography>
          </div>
          <Row
            style={{
              margin: "5rem",
            }}
          >
            <Col span={6} className="sectiondiv">
              <div
                style={{
                  background: "#F4F4F4",
                  padding: 15,
                  boxShadow: "0px 0px 5px 0px rgb(0 0 0 / 20%)",
                  paddingBottom: 10,
                }}
              >
                <img src={car1} alt="car1" />
                <Typography className="firsttext">
                  Fuel & Maintenance Included
                </Typography>
              </div>
            </Col>
            <Col span={6} className="sectiondiv">
              <div
                style={{
                  background: "#F4F4F4",
                  padding: 15,
                  boxShadow: "0px 0px 5px 0px rgb(0 0 0 / 20%)",
                  paddingBottom: 10,
                }}
              >
                <img src={car2} alt="car2" />
                <Typography className="firsttext">
                  Always with you 24/7 Support
                </Typography>
              </div>
            </Col>
            <Col span={6} className="sectiondiv">
              <div
                style={{
                  background: "#F4F4F4",
                  padding: 15,
                  boxShadow: "0px 0px 5px 0px rgb(0 0 0 / 20%)",
                  paddingBottom: 10,
                }}
              >
                <img src={car3} alt="car3" />
                <Typography className="firsttext">
                  Safety & Comfort GPS Enabled Cars
                </Typography>
              </div>
            </Col>
            <Col span={6} className="sectiondiv">
              <div
                style={{
                  background: "#F4F4F4",
                  padding: 15,
                  boxShadow: "0px 0px 5px 0px rgb(0 0 0 / 20%)",
                  paddingBottom: 10,
                }}
              >
                <img src={car4} alt="car4" />
                <Typography className="firsttext">
                  Pick-up from your convenient location
                </Typography>
              </div>
            </Col>
          </Row>
        </div>
        <Divider />
        <Row className="header footerdiv" style={{ height: "auto" }}>
          <Col span={3}>
            <img src={Logo} alt="Logo" />
          </Col>
          <Col span={6}></Col>
          <Col span={6}>
            <Typography>Company</Typography>
          </Col>
          <Col span={6}>
            <Typography>Connect With Us</Typography>
          </Col>
        </Row>
        <Row className="header footerdiv" style={{ height: "auto" }}>
          <Col span={9}>
            <Typography style={{ position: "absolute", width: "max-width" }}>
              Powered by ZamZam CarRent. Your ground mobility provider
            </Typography>
          </Col>
          <Col span={6}>
            <Typography>About Us</Typography>
          </Col>
          <Col span={6}>
            <Typography>
              <i class="fa fa-phone"></i> + 91-1234-567-891
            </Typography>
          </Col>
        </Row>
        <Row className="header footerdiv" style={{ height: "auto" }}>
          <Col span={9} />
          <Col span={6}>
            <Typography>Booking Policy</Typography>
          </Col>
          <Col span={6}>
            <Typography>
              <i class="fa fa-envelope" aria-hidden="true"></i>
              &nbsp;zamzam@zamzamcarrent.com
            </Typography>
          </Col>
        </Row>
        <Row className="header footerdiv" style={{ height: "auto" }}>
          <Col span={9} />
          <Col span={6}>
            <Typography>Contact Us</Typography>
          </Col>
        </Row>
        <Row className="header footerdiv" style={{ height: "auto" }}>
          <Col span={9} />
          <Col span={6}>
            <Typography>Privacy Policy</Typography>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Home;
