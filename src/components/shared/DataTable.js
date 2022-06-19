import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Chip from "@mui/material/Chip";
function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function DataTable({ data, columns, totalData }) {
  console.log("ppdata", data);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {columns.map((row) => (
              <TableCell align="left">{row.label} </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>
                {row.logo && (
                  <img
                    src={
                      "https://ispeak.api.pfe.anypli.com/" + row.logo.substr(7)
                    }
                    alt="logocentre"
                    style={{ width: 24 }}
                  />
                )}
              </TableCell>
              <TableCell align="left">{row.name}</TableCell>
              <TableCell align="left">{row.phone}</TableCell>
              <TableCell align="left">
                {row.language.map((item) => (
                  <Chip label={item} />
                ))}
              </TableCell>

              <TableCell align="left">
                <div style={{ background: row.color1, color: row.color1 }}>
                  {"color"}{" "}
                </div>
              </TableCell>
              <TableCell align="left">
                <div style={{ background: row.color2, color: row.color2 }}>
                  {"color"}{" "}
                </div>
              </TableCell>
              <TableCell align="left">
                {" "}
                <div style={{ background: row.color3, color: row.color3 }}>
                  {"color"}{" "}
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
