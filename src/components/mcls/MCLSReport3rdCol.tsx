import React from "react";
import ReportBacklogTitle from "./MCLSReportBacklogTitle";

function MCLSReport3rdCol() {
  return (
    <div className="flex-1 bg-mediphix_card_background p-8 rounded-lg">
      <ReportBacklogTitle count={4} style={3} title="Done" />
    </div>
  );
}

export default MCLSReport3rdCol;
