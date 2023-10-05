import { useState } from "react";


const GroupedTeamMembers = ({employees, selectedTeam, setTeam}) => {

    const [groupedEmployees, setGroupedData] = useState(groupTeamMembers());

    function groupTeamMembers() {

      let teams = [];
      
      const teamAMembers = employees.filter(
        (employee) => employee.teamName === 'TeamA'
      );
      const teamA = {team: 'TeamA', members:teamAMembers, collapsed: selectedTeam === 'TeamA' ? false : true}

      const teamBMembers = employees.filter(
				(employee) => employee.teamName === 'TeamB'
			);
			const TeamB = {
				team: 'TeamB',
				members: teamBMembers,
				collapsed: selectedTeam === 'TeamB' ? false : true,
			};

      const teamCMembers = employees.filter(
				(employee) => employee.teamName === 'TeamC'
			);
			const TeamC = {
				team: 'TeamC',
				members: teamCMembers,
				collapsed: selectedTeam === 'TeamC' ? false : true,
			};

      const teamDMembers = employees.filter(
				(employee) => employee.teamName === 'TeamD'
			);
			const TeamD = {
				team: 'TeamD',
				members: teamDMembers,
				collapsed: selectedTeam === 'TeamD' ? false : true,
			};
    }

    function handleTeamClick(event) {
      const newGroupData = groupedEmployees.map((groupedData) => groupedData.team === event.currentTarget.id ? {...groupedData, collaped:!groupedData.collaped});
    }


    return (
      <main className="container">
        {
          groupedEmployees.map((item) => {
            return (
              <div key={item.team} className="card mt-2" style={{cursor:"pointer"}}>
                <h4 id={item.team} className="card-header text-secondary bg-white" onClick={handleTeamClick}>{item.team}
                </h4>
                <div id={"collapse_" + item.team} className={item.collapsed === true?"collapsed":""}>
                  <hr />
                  {
                    item.members.map(member => {
                      return (
                        <div className="mt-2">
                          <h5 className="card-title mt-2">
                            <span className="text-dark">Full Name: {member.fullName}</span>
                          </h5>
                          <p>Designation: {member.designation}</p>
                        </div>
                      )
                    })
                  }
                </div>
              </div>
            )
          })
        }
      </main>
    )
  }
  
  export default GroupedTeamMembers;