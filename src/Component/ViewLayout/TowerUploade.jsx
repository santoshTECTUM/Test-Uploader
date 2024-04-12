import React from 'react'
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Label,
  Row,
  Table,
} from "reactstrap";
import ReactPaginate from "react-paginate";
const TowerUploade = () => {
  return (
    <>
    {/* <Row>
      <Col sm="12">
        <Button
          className="float-right btn btnBlack"
          onClick={(e) => {
            props?.setactiveTab(3);
          }}
        >
          Go Back
        </Button>
      </Col>
    </Row> */}

    <Row className="mt-2">
      <Col sm="8" md="8" lg="8" xl="8" className="screenReso">
        {/* <Card className="shadow  "> */}
          {/* <Col
            sm="12"
            md="12"
            lg="12"
            xl="12"
            className="d-flex justify-content-start"
          >
            <Button
              className=" btn btnBlack mt-2"
              // style={{ background: process.env.REACT_APP_BACKGROUND_COLOR, position: "absolute", }}
              style={{ background: "black", position: "absolute", }}
              // onClick={(e) => {
              //   // props?.setIsTowerSample(!props?.isTowerSample)
              //   props?.setactiveTabGP(5);
              //   UseHeaderTab(tabValue(5));
              // }}

            >
              <i className="fa fa-arrow-left mr-2"></i>
              Go Back
            </Button>
          </Col> */}

          <Row
            className="sdrMain border  border-dark rounded mb-4 mt-6"
            style={{ boxShadow: "2px 3px 2px 2px gray" }}
          >
            <CardHeader
              className="text-center w-100 p-0"
              style={{ borderBottom: "2px dotted black" }}
            >
              <div className="row">
                <div className="col-12">
                  {true ? (
                    <span className="text-dark h3">
                      {"EDIT"} &nbsp;{"TOWER DATA"}
                    </span>
                  ) : (
                    <span className="text-dark h3">
                      {"INSERT"} &nbsp;{"TOWER DATA"}
                    </span>
                  )}
                </div>
              </div>
            </CardHeader>

            <Col
              sm="12"
              md="12"
              lg="12"
              xl="12"
              xxl="12"
              className="text-right mt-1"
              // onClick={() => {
              //   setTowerData({
              //     ...TowerData,
              //     tower_cgi: "",
              //     tower_location: "",
              //     tower_site_name: "",
              //     tower_azimuth: "",
              //     tower_radius: "",
              //     tower_district: "",
              //     tower_latitude: "",
              //     tower_longitude: "",
              //     tower_network_type: "",
              //     tower_operator: "",
              //     tower_state: "",
              //     tower_town: "",
              //     tower_pincode: "",
              //     tower_height: ""
              //   });
              //   setIsEdit(false);
              //   setMobile([]);
              // }}
            >
              <a
                className="text-primary"
                // disabled={isReset}
                style={{ textDecoration: "underline" }}
              >
                Reset All
              </a>
            </Col>
            <Col sm="12" md="12" lg="6" xl="6" xxl="6" className=" srdrInput mb-3">
              <Label className="m-0">Tower CGI</Label>
              <span className=" m-0 float-right" style={{ paddingTop: "6px", color: "red" }}>
                {/* {TowerData?.tower_cgi === "" ? "Required field*" : ""} */}
              </span>

              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text ">
                    <i className="fas fa-broadcast-tower"></i>
                  </span>
                </div>
                <input
                  type="text"
                  className="check inputFocus"
                  name="tower_cgi"
                  placeholder="Tower CGI"
                  // value={TowerData?.tower_cgi || ""}
                  // onChange={(e) => {
                  //   setTowerData({
                  //     ...TowerData,
                  //     tower_cgi: e.target.value,
                  //   });
                  // }}
                />
              </div>
            </Col>

            <Col sm="12" md="12" lg="6" xl="6" xxl="6" className=" srdrInput mb-3">
              <Label className="m-0">Tower Network Type</Label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text ">
                    <i className="fas fa-rss"></i>
                  </span>
                </div>
                <input
                  type="text"
                  className="check inputFocus"
                  name="tower_network_type"
                  placeholder="Tower Network Type"
                  // value={TowerData?.tower_network_type || ""}
                  // onChange={(e) => {
                  //   setTowerData({
                  //     ...TowerData,
                  //     tower_network_type: e.target.value,
                  //   });
                  // }}
                />
              </div>
            </Col>

            <Col sm="12" md="12" lg="6" xl="6" xxl="6" className=" srdrInput mb-3">
              <Label className="m-0">Tower Location</Label>
              <span className=" m-0 float-right" style={{ paddingTop: "6px", color: "red" }}>
              </span>

              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text ">
                    <i className="fas fa-thumbtack"></i>
                  </span>
                </div>
                <input
                  type="text"
                  className="check inputFocus"
                  name="tower_location"
                  placeholder="Tower Location"
                  // value={TowerData?.tower_location || ""}
                  // onChange={(e) => {
                  //   setTowerData({
                  //     ...TowerData,
                  //     tower_location: e.target.value,
                  //   });
                  // }}
                />
              </div>
            </Col>

            <Col sm="12" md="12" lg="6" xl="6" xxl="6" className=" srdrInput mb-3">
              <Label className="m-0">Tower Operator</Label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text ">
                    <i className="fas fa-mobile-alt"></i>
                  </span>
                </div>
                <input
                  type="text"
                  className="check inputFocus"
                  name="tower_operator"
                  placeholder="Tower Operator"
                  // value={TowerData?.tower_operator || ""}
                  // onChange={(e) => {
                  //   setTowerData({
                  //     ...TowerData,
                  //     tower_operator: e.target.value,
                  //   });
                  // }}
                />
              </div>
            </Col>

            <Col sm="12" md="12" lg="6" xl="6" xxl="6" className=" srdrInput mb-3 mb-3">
              <Label className="m-0">Tower Site Name</Label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text ">
                    <i className="far fa-map"></i>
                  </span>
                </div>
                <input
                  type="text"
                  className="check inputFocus"
                  name="tower_site_name"
                  placeholder="Tower Site Name"
                  // value={TowerData?.tower_site_name || ""}
                  // onChange={(e) => {
                  //   setTowerData({
                  //     ...TowerData,
                  //     tower_site_name: e.target.value,

                  //   });
                  // }}
                />
              </div>
            </Col>

            <Col sm="12" md="12" lg="6" xl="6" xxl="6" className=" srdrInput mb-3">
              <Label className="m-0">Tower Height</Label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text ">
                    <i className="fas fa-sort-amount-up"></i>
                  </span>
                </div>
                <input
                  type="text"
                  className="check inputFocus"
                  name="tower_height"
                  placeholder="Tower Height"
                  // value={TowerData?.tower_height || ""}
                  // onChange={(e) => {
                  //   setTowerData({
                  //     ...TowerData,
                  //     tower_height: e.target.value,
                  //   });
                  // }}
                />
              </div>
            </Col>


            <Col sm="12" md="12" lg="6" xl="6" xxl="6" className=" srdrInput mb-3">
              <Label className="m-0">Tower Latitude</Label>
              <span className=" m-0 float-right" style={{ paddingTop: "6px", color: "red" }}>
                {/* {TowerData?.tower_latitude === "" ? "Required field*" : ""} */}
              </span>

              <div className="input-group">
                <div className="input-group-prepend">
                  {/* <span className={latitudeValidation ? "input-group-textvalidation" : "input-group-text"}> */}
                    <i className="fas fa-map-pin"></i>
                  {/* </span> */}
                </div>
                <input
                  type="text"
                  // className={latitudeValidation ? "check inputFocus validationBoder" : "check inputFocus"}
                  name="tower_latitude"
                  placeholder="Tower Latitude"
                  // value={TowerData?.tower_latitude || ""}
                  // onChange={(e) => {
                  //   setTowerData({
                  //     ...TowerData,
                  //     tower_latitude: e.target.value,

                  //   });
                  // }}
                /><br />

              </div>
              {/* {latitudeValidation &&
                <span style={{ color: 'red' }}>*Invalid input</span>
              } */}
            </Col>

            <Col sm="12" md="12" lg="6" xl="6" xxl="6" className=" srdrInput mb-3">
              <Label className="m-0">Tower Pincode</Label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text ">
                    <i className="fas fa-map"></i>
                  </span>
                </div>
                <input
                  type="text"
                  className="check inputFocus"
                  name="tower_pincode"
                  placeholder="Tower Pincode"
                  maxLength={7}
                  // value={TowerData?.tower_pincode || ""}
                  // onChange={(e) => {
                  //   setTowerData({
                  //     ...TowerData,
                  //     tower_pincode: e.target.value,
                  //   });
                  // }}
                />
              </div>
            </Col>

            <Col sm="12" md="12" lg="6" xl="6" xxl="6" className=" srdrInput mb-3">
              <Label className="m-0" >Tower Longitude</Label>
              <span className=" m-0 float-right" style={{ paddingTop: "6px", color: "red" }}>
                {/* {TowerData?.tower_longitude === "" ? "Required field*" : ""} */}
              </span>

              <div className="input-group">
                <div className="input-group-prepend">
                  {/* <span className={longitudeValidation ? "input-group-textvalidation" : "input-group-text"}> */}
                    <i className="fas fa-map-pin"></i>
                  {/* </span> */}
                </div>
                <input
                  type="text"
                  // className={longitudeValidation ? "check inputFocus validationBoder" : "check inputFocus"}
                  name="tower_longitude"
                  placeholder="Tower Longitude"
                  // value={TowerData?.tower_longitude || ""}
                  // onChange={(e) => {
                  //   setTowerData({
                  //     ...TowerData,
                  //     tower_longitude: e.target.value,

                  //   });
                  // }}
                /><br/>
                
              </div>
              {/* {longitudeValidation &&
                  <span style={{ color: 'red' }}>*Invalid input</span>
                } */}
            </Col>

            <Col sm="12" md="12" lg="6" xl="6" xxl="6" className=" srdrInput mb-3">
              <Label className="m-0">Tower Town</Label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text ">
                    <i className="fas fa-map-marked-alt"></i>
                  </span>
                </div>
                <input
                  type="text"
                  className="check inputFocus"
                  name="tower_town"
                  placeholder="Tower Town"
                  // value={TowerData?.tower_town || ""}
                  // onChange={(e) => {
                  //   setTowerData({
                  //     ...TowerData,
                  //     tower_town: e.target.value,
                  //   });
                  // }}
                />
              </div>
            </Col>

            <Col sm="12" md="12" lg="6" xl="6" xxl="6" className=" srdrInput mb-3">
              <Label className="m-0"> Tower Azimuth</Label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text ">
                    <i className="fas fa-satellite-dish"></i>
                  </span>
                </div>
                <input
                  type="text"
                  className="check inputFocus"
                  name="tower_azimuth"
                  placeholder="Tower Azimuth"
                  // value={TowerData?.tower_azimuth || ""}
                  // onChange={(e) => {
                  //   setTowerData({
                  //     ...TowerData,
                  //     tower_azimuth: e.target.value,
                  //   });
                  // }}
                />
              </div>
            </Col>

            <Col sm="12" md="12" lg="6" xl="6" xxl="6" className=" srdrInput mb-3">
              <Label className="m-0">Tower District</Label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text ">
                    <i className="far fa-compass"></i>
                  </span>
                </div>
                <input
                  type="text"
                  className="check inputFocus"
                  name="tower_district"
                  placeholder="Tower District"
                  // value={TowerData?.tower_district || ""}
                  // onChange={(e) => {
                  //   setTowerData({
                  //     ...TowerData,
                  //     tower_district: e.target.value,
                  //   });
                  // }}
                />
              </div>
            </Col>

            <Col sm="12" md="12" lg="6" xl="6" xxl="6" className=" srdrInput mb-3">
              <Label className="m-0">Tower Radius</Label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text ">
                    <i className="fas fa-drafting-compass"></i>
                  </span>
                </div>
                <input
                  type="text"
                  className="check inputFocus"
                  name="tower_radius"
                  placeholder="Tower Radius"
                  // value={TowerData?.tower_radius || ""}
                  // onChange={(e) => {
                  //   setTowerData({
                  //     ...TowerData,
                  //     tower_radius: e.target.value,
                  //   });
                  // }}
                />
              </div>
            </Col>

            <Col sm="12" md="12" lg="6" xl="6" xxl="6" className=" srdrInput mb-3">
              <Label className="m-0">Tower State</Label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text ">
                    <i className="fas fa-compass"></i>
                  </span>
                </div>
                <input
                  type="text"
                  className="check inputFocus"
                  name="tower_state"
                  placeholder="Tower State"
                  // value={TowerData?.tower_state || ""}
                  // onChange={(e) => {
                  //   setTowerData({
                  //     ...TowerData,
                  //     tower_state: e.target.value,
                  //   });
                  // }}
                />
              </div>
            </Col>





            <Col
              sm="12"
              md="12"
              lg="12"
              xl="12"
              className="mt-4 mb-2 text-center"
            >
              {/* {isEdit ? ( */}
                <button
                  id=""
                  // style={{ background: process.env.REACT_APP_BACKGROUND_COLOR }}
                  className="btn btnBlack w-25"
                  SDR
                  Submit
                  // onClick={(e) => {
                  //   addTowerData();
                  // }}
                  // disabled={!isReset}
                >
                  Update
                </button>
              {/* ) : ( */}
                <button
                
                  id=""
                  // style={{ background: process.env.REACT_APP_BACKGROUND_COLOR }}
                  // style={{ background: linear-gradient(87deg, rgb(17, 205, 239) 0px, rgb(17, 113, 239) 100%); }}
                  style={{ background: "linear-gradient(87deg, rgb(17, 205, 239) 0px, rgb(17, 113, 239) 100%)" }}
                  className="btn btnBlack w-25"
                  SDR
                  Submit
                  // onClick={(e) => {
                  //   addTowerData();
                  // }}
                  // disabled={!isReset}
                >
                  Submit
                </button>
              {/* )} */}
            </Col>

          </Row>
        {/* </Card> */}
      </Col>

      <Col sm="4" md="4" lg="4" xl="4">
        <Card style={{ backgroundColor: "#d9e2e5" }}>
          <CardBody>
            <div className="row mt-2">
              <div className="col-3 justify-content-center">
                <Label>Tower</Label>
              </div>
              <div className="col-8">
                <Button
                  // style={{ background: process.env.REACT_APP_BACKGROUND_COLOR }}
                  style={{ background: "#fb6340", color:"white" }}
                  className="btn btn-warning w-100 text-center"
                  // onClick={() => {
                  //   TowerTemplateDownload();
                  // }}
                >
                  Download Template
                </Button>

              </div>
            </div>
            <div className="row mt-2">
              <div className="col-3">
                <Label>Select File</Label>
              </div>
              <div className="col-8">
                <Label
                  id="choosefile"
                  className="btn btnUpload w-100 text-center"
                  style={{ background: "rgb(240, 39, 19)", color:"white" }}
                >
                  Choose File
                  <input
                    type="file"
                    // multiple
                    // onClick={(e) => {
                    //   e.target.value = null;
                    // }}

                    // name="file"
                    // onChange={changeHandler}
                    style={{ display: "none" }}
                  />
                </Label>
              </div>
              <Label className="col-3 "></Label>
              <div className="col-8">
                <Label>{}</Label>
              </div>
            </div>

            <div className="row mt-3 ">
              <Label className="col-3"></Label>
              <div className="col-8 ">
                {/* {
                  showProgressBar &&
                  <>
                    <SdrManageLoader progress={progress} />
                  </>
                } */}
                <button
                  id="uploadFile"
                  className="btn btnBlack m-auto w-100"
                  // style={{ background: process.env.REACT_APP_BACKGROUND_COLOR }}
                  style={{ background: "linear-gradient(87deg, rgb(17, 205, 239) 0px, rgb(17, 113, 239) 100%)" }}
                  // //  isDisabled={false}
                  // disabled={isUploadTower || selectedFile?.length == 0}
                  // onClick={(e) => {
                  //   uploadTower(e);
                  // }}
                >
                  <i className="ni ni-cloud-upload-96 mr-2" />
                  Upload Tower
                </button>
              </div>
            </div>
          </CardBody>
        </Card>
      </Col>
    </Row>

    <Row>
      <Col sm="12" md="12" lg="12" xl="12">
        {/* {isTable ? ( */}
          <div className="container">
            <div className="row justify-content-md-center d-grid">
              <div className="voipViewSearch">
                {/* <div className="spinner-border mt-2" role="status">
                  <span className="sr-only">Loading...</span>
                </div> */}
              </div>
            </div>
          </div>
        {/* // ) : towerAddedDataList?.length > 0 ? ( */}
          <>
            <Table
              className="align-items-center table-flush table-striped mb-1 "
              responsive
            >
              <thead className="tableHead" >
                <tr>
                  <th style={{ width: "5%" }}> #</th>
                  <th style={{ width: "30%" }}>Tower CGI</th>
                  <th style={{ width: "30%" }}>Location</th>
                  <th style={{ width: "10%" }}>Lat/Long</th>
                  <th style={{ width: "5%" }}>Azimuth</th>
                  <th style={{ width: "10%" }}>Pin Code</th>
                  <th style={{ width: "10%" }}>Action</th>
                </tr>
              </thead>
              <tbody>
                {/* {towerAddedDataList.map((item, key) => ( */}
                  <tr >
                    <td style={{ width: "5%" }} className="text-center"></td>
                    <td style={{ width: "30%" }}>
                      {/* {TabelValidation(item?.tower_cgi)
                        ? item?.tower_cgi : "N/A"} */}
                    </td>
                    <td style={{ width: "30%" }}>
                      {/* {TabelValidation(item?.tower_location)
                        ? item?.tower_location : "N/A"} */}
                    </td>
                    <td style={{ width: "10%" }}>
                      {/* {TabelValidation(item?.tower_latitude)
                        ? item?.tower_latitude : "N/A"}
                      /
                      {TabelValidation(item?.tower_longitude)
                        ? item?.tower_longitude : "N/A"} */}
                    </td>
                    <td style={{ width: "5%" }}>
                      {/* {TabelValidation(item?.tower_azimuth)
                        ? item?.tower_azimuth : "N/A"} */}
                    </td>

                    <td style={{ width: "10%" }}>
                      {/* {TabelValidation(item?.tower_pincode)
                        ? item?.tower_pincode : "N/A"} */}
                    </td>

                    <td style={{ width: "10%" }}>
                      {/* {item?.phone_no !== mobile[0]?.value && (
                        <button
                          type="button"
                          className="btn btnEdit btn-sm btn btnBlack btn-sm"
                          onClick={(e) => {
                            setIsEdit(true);
                            setTowerData({
                              ...TowerData,
                              tower_cgi: "",
                              tower_location: "",
                              tower_site_name: "",
                              tower_azimuth: "",
                              tower_radius: "",
                              tower_district: "",
                              tower_latitude: "",
                              tower_longitude: "",
                              tower_network_type: "",
                              tower_operator: "",
                              tower_state: "",
                              tower_town: "",
                              tower_pincode: "",
                              tower_height: ""
                            });

                            DateSelect(item?.sim_activation_date, item.dob)


                            window.scrollTo({
                              top: 400,
                              behavior: "smooth",
                            });
                          }}
                        >
                          Edit
                        </button>
                      )} */}

                      {/* <ModalComponent
                        id="caseDelete"
                        // ids={item.tower_cgi}
                        action={"Confirm"}
                        Name={"Delete"}
                        // handleAction={deleteData}
                        text={"Are you sure you want to delete this case ?"}
                        icon={"fa fa-question-circle fa-8x text-red pb-2"}
                        width={"medium"}
                      ></ModalComponent> */}
                    </td>
                  </tr>
                {/* ))} */}
              </tbody>
            </Table>
            {/* <ReactPaginate
              previousLabel="Prev"
              nextLabel="Next"
              breakLabel="..."
              pageClassName="page-item"
              pageLinkClassName="page-link"
              previousLinkClassName="page-link"
              nextLinkClassName="page-link"
              containerClassName="pagination"
              activeClassName="active"
              breakLinkClassName="page-link"
              // pageCount={pageCount}
              marginPagesDisplayed={2}
              pageRangeDisplayed={5}
              // onPageChange={handleClick}
              subContainerClassName="pagination"
              // forcePage={Math.ceil((offset ? offset : 0) / perPage)}
            /> */}
          </>
        {/* ) : ( */}
          {/* "" */}
        {/* )} */}
      </Col>
    </Row>
  </>
  )
}

export default TowerUploade