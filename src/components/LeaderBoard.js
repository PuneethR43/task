import React from "react";
import { FaSearch } from "react-icons/fa"
import {FaFilter} from "react-icons/fa";
import DatePicker from "react-datepicker";
import Select from "react-select";

import "react-datepicker/dist/react-datepicker.css";

class LeaderBoard extends React.Component {
  constructor() {
    super();
    this.state = {
        status: true,
      info: [
        {
          name: "tom",
          grade: "01",
          points: "850",
          subject: "Science",
          instituatic: "03",
        },
        {
          name: "will",
          points: "700",
          grade: "03",
          subject: "Social Studies",
          instituatic: "01",
        },
        {
          name: "tony",
          points: "600",
          grade: "02",
          subject: "Science",
          instituatic: "03",
        },
        {
          name: "john",
          points: "900",
          grade: "02",
          subject: "Maths",
          instituatic: "01",
        },
        {
            name: "jim",
            points: "200",
            grade: "02",
            subject: "Maths",
            instituatic: "02",
          },
      ],
      course: [
        {value: "Math", label: "Math"},
        {value: "Science", label: "Science"},
        {value: "Social Studies", label: "Social Studies"}
      ],
      grades: [
        {value: "01", label: "01"},
        {value: "02", label: "02"},
        {value: "03", label: "03"},
        {value: "04", label: "04"},
      ]
    }
  }
  
  handleClick = () => {
    this.setState((prevState) => {
      return {
        status: !prevState.status
      }
    })
  }

  render() {
    return (
      <div class="container">
        <h2
          
          style={{
            marginTop: "20px",
            textAlign: "center",
            color: "maroon",
          }}
        >
          Leader Board
        </h2>
        <div
          class="container login-reg"
          style={{
           
            border: "0.1px  black",
            borderRadius:"6px"
          }}
        >
          <div style={{display: "flex", justifyContent: "space-between"}}>
            <div style={{marginBottom: "20px", marginTop: "10px"}}>
              <button
                class="btn btn-light"
                style={{
                  color: "white",
                  backgroundColor: this.state.status ? "black" : "gray",
                }}
                onClick={this.handleClick}
              >
                Quiz Masters
              </button>
              <button
                class="btn btn-light"
                style={{
                  color: "white",
                  backgroundColor: !this.state.status ? "black" : "gray",
                }}
                onClick={this.handleClick}
              >
                course toppers
              </button>
            </div>
            <div
              style={{
                marginBottom: "20px",
                marginTop: "10px",
                display: "flex",
                flexDirection: "row",
              }}
            >
              <div>
                <FaSearch style={{fontSize: "30px"}} />
                <input
                  placeholder="search"
                  style={{width:"200px", height:"30px"}}
                  type="text"
                  value={this.state.searchElement}
                  onChange={this.handleChange}
                />
              </div>

              <button
                type="button"
                class="btn btn-primary"
                data-toggle="modal"
                data-target="#exampleModal"
              > Filter <FaFilter/>
              </button>

              <div
                class="modal fade"
                id="exampleModal"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      
                      <button
                        type="button"
                        class="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                      </button>
                    </div>
                    <div class="modal-body">
                      <div>
                        type
                        <button>Quiz Master</button>
                        <button> Course Toppers</button>
                      </div>
                      <div>
                        grade
                        <Select
                          options={this.state.grades}
                        />
                      </div>
                      <div>
                        From
                        <DatePicker
                          onChange={(date) => this.handleDateFrom(date)}
                        />
                      </div>
                      <div>
                        From
                        <DatePicker
                          onChange={(date) => this.handleDateTo(date)}
                        />
                      </div>
                      <div>
                        subject
                        <Select
                          options={this.state.course}
                        />
                      </div>
                      <div>
                        Instituatic
                        <Select
                          options={this.state.grades}
                        />
                      </div>
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-secondary"
                        data-dismiss="modal"
                      >
                        clear all
                      </button>
                      <button type="button" class="btn btn-primary">
                        Apply Filter
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <span>Quiz Master of the Month-October 2020</span>
            <div>
              <table class="table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Grade</th>
                    <th>Points</th>
                    <th>Subject</th>
                    <th>Instituatic</th>
                  </tr>
                </thead>
                <tbody>
                {
                    this.state.info.map((ele)=>{
                                return (
                                    <tr>
                                        <td> {ele.name} </td>
                                        <td> {ele.grade} </td>
                                        <td> {ele.points} </td>
                                        <td> {ele.subject} </td>
                                        <td> {ele.instituatic} </td>
                                    </tr>
                                )
                            })
                        }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default LeaderBoard