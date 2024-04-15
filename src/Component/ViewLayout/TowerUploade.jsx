import React, { useEffect, useState } from 'react'
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
import '@fortawesome/fontawesome-free/css/all.min.css';
import { TowerAdded, towerSampleDownload } from '../../../config/service/ApiEndPoint/towerUploader';
import ModalComponent from '../../shared/commonComponent/ModalComponent';
import { TabelValidation } from '../../shared/commonComponent/validation';
const TowerUploade = () => {

  const [TowerData, setTowerData] = useState({});
  const [isReset, setIsReset] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [isTable, setIsTable] = useState(true);
  const [latitudeValidation, setLatitudeValidation] = useState(false);
  const [longitudeValidation, setLongitudeValidation] = useState(false);
  const lat_long_regex = /^-?([0-9]{1,2}|1[0-7][0-9]|180)(\.[0-9]{1,10})$/;
  const [towerAddedDataList, setTowerAddedDataList] = useState([{ tower_cgi: "test cgi", tower_location: "test_location", tower_latitude: "73.67", tower_longitude: "72.65", tower_azimuth: "81.6", tower_pincode: "232520" }])


  useEffect(() => {
    if (
      TowerData.tower_cgi &&
      TowerData.tower_latitude &&
      TowerData.tower_longitude
    ) {
      setIsReset(true);
    } else {
      setIsReset(false);
    }

  }, [TowerData]);



  const handlechagne = (data, field) => {
    console.log(data, field);
    if (data) {

    } else {

    }


  }

  const latValidate = () => {

    var latitudeNumber = parseFloat(TowerData.tower_latitude);

    if (!lat_long_regex.test(latitudeNumber)) {
      setLatitudeValidation(true)
      return;
    } else {
      setLatitudeValidation(false)
      return;
    }
  }



  const longValidate = () => {


    var longitudeNumber = parseFloat(TowerData.tower_longitude);

    if (!lat_long_regex.test(longitudeNumber)) {
      setLongitudeValidation(true)
      return;
    }
    else {
      setLongitudeValidation(false)
      return;
    }


  }

  const addTowerData = async () => {
    // validation here compulsary field is cgi, lat, long ,location



    let obj = {
      // caseId: caseId ? caseId : null,
      isAdd: isEdit ? "no" : "yes",
      tower_cgi: TowerData.tower_cgi,
      tower_location: TowerData.tower_location,
      tower_site_name: TowerData.tower_site_name,
      tower_azimuth: TowerData.tower_azimuth,
      tower_radius: TowerData.tower_radius,
      tower_district: TowerData.tower_district,
      tower_latitude: TowerData.tower_latitude,
      tower_longitude: TowerData.tower_longitude,
      tower_network_type: TowerData.tower_network_type,
      tower_operator: TowerData.tower_operator,
      tower_state: TowerData.tower_state,
      tower_town: TowerData.tower_town,
      tower_pincode: TowerData.tower_pincode,
      tower_height: TowerData.tower_height

    };


    const result = await TowerAdded(obj);
    console.log(result, obj);
    if (result.status === 200) {
      toast.success(result?.result?.msg);
      let ofst = offset != undefined ? offset : "zero"
      towerAddedList(ofst);
      setTowerData({});
      setLatitudeValidation(false)
      setLongitudeValidation(false)
    } else if (result.status === 401) {
      toast.error(result?.message);
    } else {
      toast.error("Error");
    }
  };
  //table list
  const towerAddedList = async (offsetData) => {
    let obj1 = {
      limit: perPage,
      offset: offsetData === "zero" ? 0 : offsetData,
      tower_cgi: '',
      district: '',
      state: '',
      pincode: '',
      tower_location: '',
      tower_town: ''
    }

    setIsTable(false);
    const result = await TowerAddedList(obj1);
    if (result.status === 200 && result?.result?.data?.length > 0) {
      setIsTable(false);
      setTowerAddedDataList(result?.result?.data);
      setPageCount(Math.ceil(result?.result?.totalCount / perPage));
      console.log(pageCount, 'pagecount')
      if (offsetData == 0) {
        setIndex(0)
        setOffset(0)
      }
      setIsEdit(false);
    } else if (result.status === 401) {
      toast.error("401");
    }

    else {
      setIsTable(false);
      toast.error("Data not found.");
      setTowerAddedDataList([]);
    }
  };




  //   ................................second module.children........................

  const TowerTemplateDownload = async () => {
    let obj = {

      caseId: 197,

    };
    const result = await towerSampleDownload(obj) //14 feb api changed suggsted by vijay sir
    if (result?.status === 200 && result?.result?.length > 0) {
      serverUrlDownload(result?.result)
    } else {
      toast.error("Data not found.")
    }
  };

  const deleteData = async (data) => {
    console.log(offset);
    let obj = {
      tower_cgi: data,
    };
    const result = await TowerListDelete(obj);
    // console.log(result);

    if (result.status === 200 && result?.result === "Data Removed From Tower") {
      toast.success("Data removed from tower");
      const offsetData = towerAddedDataList.length == 1 ? 0 : offset != undefined ? offset : "zero"
      towerAddedList(offsetData);
    } else {
      toast.success("Error data not remove!");
    }
  };



  const changeHandler = (event) => {

    event.preventDefault();

    if (event.target.value.split("\\").pop().length <= 90) {
      //   console.log("event", event.target.files, event.target.files[0]);
      // formData.append("sdrFile", event.target.files[0]);
      setSelectedFile(event.target.files);
      setSelectedFileName(event.target.files[0].name);
    } else {
      toast.error("File name should be less then 90 character. ");
    }
  };




  //   ................................second module.children........................



  var formData = new FormData();
  const uploadTower = async (event) => {
    event.preventDefault();

    setIsUploadTower(true)
    for (const key of Object.keys(selectedFile)) {
      // console.log(selectedFile[key]);
      formData.append("towerFile", selectedFile[key]);
    }

    // console.log(formData, selectedFile);

    try {
      axios
        .post(`${URLS.BASE_URL}/api/tower/bulkUpload?caseId=${caseId} `, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: "Bearer " + localStorage.getItem("accessToken"),
          },
          onUploadProgress: (progressEvent) => {
            setProgress(Math.round((progressEvent.loaded / progressEvent.total) * 100));
            setShowProgressBar(true)
          }
        }).then((response) => {
          console.log("response----------", response);

          if (response?.data?.success) {
            toast.success(response?.data?.message);
            towerAddedList("zero")// Table list updated
            setIsUploadTower(false)
            setTimeout(() => {
              // Assuming upload is successful after 2 seconds
              setShowProgressBar(false);
            }, 2000);
            setSelectedFile([]);
            setSelectedFileName()



          } else {
            toast.error(response?.message);
            setIsUploadTower(false)
            setProgress(0)
            setTimeout(() => {
              // Assuming upload is successful after 2 seconds
              setShowProgressBar(false)
            }, 2000);
          }
        }).catch((err) => {


          console.log("error1", err.response.status, err.response.statusText);
          setSelectedFile([]);
          setSelectedFileName()
          if (!err?.response?.data?.success) {
            toast.error(err.response.data.message);
            setIsUploadTower(false)
            setProgress(0)
            setTimeout(() => {
              // Assuming upload is successful after 2 seconds
              setShowProgressBar(false)
            }, 2000);
          } else if (err?.response?.status === 500) {
            console.log("yes else if")
            toast.error(err.response.statusText);
            setIsUploadTower(false)
            // setProgress(0)
            // setTimeout(() => {
            //   // Assuming upload is successful after 2 seconds
            //   setShowProgressBar(false)
            // }, 2000);
          } else {
            toast.error(err.response.data.message);
            setIsUploadTower(false)
            console.log("else")
            setProgress(0)
            setTimeout(() => {
              // Assuming upload is successful after 2 seconds
              setShowProgressBar(false)
            }, 2000);
          }


        });
    } catch (error) {
      console.log("error", error);
    }

  };
  //   ................................second module.children........................



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
          <Row
            className="sdrMain border border-dark rounded mb-4 mt-6"
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
              style={{ textAlign: 'right' }}
            >
              <a
                className="text-primary"
                style={{ textDecoration: "underline" }}

                onClick={(e) => {
                  setTowerData({});
                }}
              >
                Reset All
              </a>
            </Col>
            <Col sm="12" md="12" lg="6" xl="6" xxl="6" className="srdrInput mb-3">
              <Label className="m-0">Tower CGI</Label>
              <span className="m-0 float-right" style={{ paddingTop: "6px", color: "red" }}>
                {TowerData?.tower_cgi === "" ? "Required field*" : ""}
              </span>

              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fas fa-broadcast-tower"></i> {/* Tower icon */}
                  </span>
                </div>
                <input
                  type="text"
                  className="check inputFocus"
                  name="tower_cgi"
                  placeholder="Tower CGI"
                  value={TowerData?.tower_cgi || ""}
                  onChange={(e) => {
                    setTowerData({
                      ...TowerData,
                      tower_cgi: e.target.value,
                    });
                  }}
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
                  value={TowerData?.tower_network_type || ""}
                  onChange={(e) => {
                    setTowerData({
                      ...TowerData,
                      tower_network_type: e.target.value,
                    });
                  }}
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
                  value={TowerData?.tower_location || ""}
                  onChange={(e) => {
                    setTowerData({
                      ...TowerData,
                      tower_location: e.target.value,
                    });
                  }}
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
                  value={TowerData?.tower_operator || ""}
                  onChange={(e) => {
                    setTowerData({
                      ...TowerData,
                      tower_operator: e.target.value,
                    });
                  }}
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
                  value={TowerData?.tower_site_name || ""}
                  onChange={(e) => {
                    setTowerData({
                      ...TowerData,
                      tower_site_name: e.target.value,

                    });
                  }}
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
                  value={TowerData?.tower_height || ""}
                  onChange={(e) => {
                    setTowerData({
                      ...TowerData,
                      tower_height: e.target.value,
                    });
                  }}

                />
              </div>
            </Col>


            <Col sm="12" md="12" lg="6" xl="6" xxl="6" className=" srdrInput mb-3">
              <Label className="m-0">Tower Latitude</Label>
              <span className=" m-0 float-right" style={{ paddingTop: "6px", color: "red" }}>
                {TowerData?.tower_latitude === "" ? "Required field*" : ""}
              </span>

              <div className="input-group">
                <div className="input-group-prepend">
                  <span className={latitudeValidation ? "input-group-textvalidation" : "input-group-text"}>

                    <i className="fas fa-map-pin"></i>
                  </span>
                </div>
                <input
                  type="text"

                  className={latitudeValidation ? "check inputFocus validationBoder" : "check inputFocus"}
                  name="tower_latitude"
                  placeholder="Tower Latitude"
                  value={TowerData?.tower_latitude || ""}
                  onChange={(e) => {
                    setTowerData({
                      ...TowerData,
                      tower_latitude: e.target.value,

                    });
                  }}
                  onBlur={latValidate}
                /><br />

              </div>
              {latitudeValidation &&
                <span style={{ color: 'red' }}>*Invalid input</span>
              }
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
                  value={TowerData?.tower_pincode || ""}
                  onChange={(e) => {
                    setTowerData({
                      ...TowerData,
                      tower_pincode: e.target.value,
                    });
                  }}
                />
              </div>
            </Col>

            <Col sm="12" md="12" lg="6" xl="6" xxl="6" className=" srdrInput mb-3">
              <Label className="m-0" >Tower Longitude</Label>
              <span className=" m-0 float-right" style={{ paddingTop: "6px", color: "red" }}>
                {TowerData?.tower_longitude === "" ? "Required field*" : ""}
              </span>

              <div className="input-group">
                <div className="input-group-prepend">
                  <span className={longitudeValidation ? "input-group-textvalidation" : "input-group-text"}>
                    <i className="fas fa-map-pin"></i>
                  </span>
                </div>
                <input
                  type="text"
                  className={longitudeValidation ? "check inputFocus validationBoder" : "check inputFocus"}
                  name="tower_longitude"
                  placeholder="Tower Longitude"
                  value={TowerData?.tower_longitude || ""}
                  onChange={(e) => {
                    setTowerData({
                      ...TowerData,
                      tower_longitude: e.target.value,

                    });
                  }}
                  onBlur={longValidate}
                /><br />

              </div>
              {longitudeValidation &&
                <span style={{ color: 'red' }}>*Invalid input</span>
              }
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
                  value={TowerData?.tower_town || ""}
                  onChange={(e) => {
                    setTowerData({
                      ...TowerData,
                      tower_town: e.target.value,
                    });
                  }}
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
                  value={TowerData?.tower_azimuth || ""}
                  onChange={(e) => {
                    setTowerData({
                      ...TowerData,
                      tower_azimuth: e.target.value,
                    });
                  }}
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
                  value={TowerData?.tower_district || ""}
                  onChange={(e) => {
                    setTowerData({
                      ...TowerData,
                      tower_district: e.target.value,
                    });
                  }}
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
                  value={TowerData?.tower_radius || ""}
                  onChange={(e) => {
                    setTowerData({
                      ...TowerData,
                      tower_radius: e.target.value,
                    });
                  }}
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
                  value={TowerData?.tower_state || ""}
                  onChange={(e) => {
                    setTowerData({
                      ...TowerData,
                      tower_state: e.target.value,
                    });
                  }}
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
              {isEdit ? (
                <button
                  id=""
                  // style={{ background: process.env.REACT_APP_BACKGROUND_COLOR }}
                  className="btn btnBlack w-25"
                  SDR
                  Submit
                  onClick={(e) => {
                    addTowerData();
                  }}
                  disabled={!isReset}
                >
                  Update
                </button>
              ) : (
                <button

                  id=""
                  // style={{ background: process.env.REACT_APP_BACKGROUND_COLOR }}
                  // style={{ background: linear-gradient(87deg, rgb(17, 205, 239) 0px, rgb(17, 113, 239) 100%); }}
                  style={{ background: "linear-gradient(87deg, rgb(17, 205, 239) 0px, rgb(17, 113, 239) 100%)" }}
                  className="btn btnBlack w-25"
                  SDR
                  Submit
                  onClick={(e) => {
                    addTowerData();
                  }}
                  disabled={!isReset}
                >
                  Submit
                </button>
              )}
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
                    style={{ background: "#fb6340", color: "white" }}
                    className="btn btn-warning w-100 text-center"
                    onClick={() => {
                      TowerTemplateDownload();
                    }}
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
                    style={{ background: "rgb(240, 39, 19)", color: "white" }}
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
                  <Label>{ }</Label>
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
                    onClick={(e) => {
                      uploadTower(e);
                    }}
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
                {towerAddedDataList.map((item, key) => (
                  <tr >
                    <td style={{ width: "5%" }} className="text-center"></td>
                    <td style={{ width: "30%" }}>
                      {TabelValidation(item?.tower_cgi)
                        ? item?.tower_cgi : "N/A"}
                    </td>
                    <td style={{ width: "30%" }}>
                      {TabelValidation(item?.tower_location)
                        ? item?.tower_location : "N/A"}
                    </td>
                    <td style={{ width: "10%" }}>
                      {TabelValidation(item?.tower_latitude)
                        ? item?.tower_latitude : "N/A"}
                      /
                      {TabelValidation(item?.tower_longitude)
                        ? item?.tower_longitude : "N/A"}
                    </td>
                    <td style={{ width: "5%" }}>
                      {TabelValidation(item?.tower_azimuth)
                        ? item?.tower_azimuth : "N/A"}
                    </td>

                    <td style={{ width: "10%" }}>
                      {TabelValidation(item?.tower_pincode)
                        ? item?.tower_pincode : "N/A"}
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

                      <ModalComponent
                        id="caseDelete"
                        ids={item.tower_cgi}
                        action={"Confirm"}
                        Name={"Delete"}
                        handleAction={deleteData}
                        text={"Are you sure you want to delete this case ?"}
                        icon={"fa fa-question-circle fa-8x text-red pb-2"}
                        width={"medium"}
                      ></ModalComponent>
                    </td>
                  </tr>
                ))}
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