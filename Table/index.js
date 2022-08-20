let values = [
  [
    "machine_name",
    "machine_id",
    "current",
    "voltage",
    "power_factor",
    "active_power",
    "apparent_power",
    "reactive_power",
    "daily_energy",
    "monthly_energy",
    "yearly_energy",
    "idle_daily",
    "idle_monthly",
    "idle_yearly",
  ],
  [
    "Auto Winding Machine",
    "machine001",
    0,
    0,
    0,
    0.0,
    0.0,
    0.0,
    0,
    0,
    0,
    0,
    0,
    0,
  ],
  ["Boiler Machine", "machine004", 0, 0, 0, 0.0, 0.0, 0.0, 0, 0, 0, 0, 0, 0],
];

const row1 = document.getElementById("row-1");
const row2 = document.getElementById("row-2");
const row3 = document.getElementById("row-3");

for (let i = 0; i < values[0].length; i++) {
  let rowValues1 = `<tr>
    <th>${values[0][i]}</th>  
  </tr>`;

  let rowValues2 = `<tr>
    <td>${values[1][i]}</td>  
  </tr>`;

  let rowValues3 = `<tr>
    <td>${values[2][i]}</td>  
  </tr>`;

  row1.innerHTML += rowValues1;
  row2.innerHTML += rowValues2;
  row3.innerHTML += rowValues3;
}
