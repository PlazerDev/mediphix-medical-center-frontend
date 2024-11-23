import React from "react";
import ReportBacklogTitle from "./MCLSReportBacklogTitle";

function MCLSReport2ndCol() {
  return (
    <div className="flex-1 bg-mediphix_card_background p-8 rounded-lg">
      <ReportBacklogTitle count={4} style={2} title="In Progress" />
    </div>
  );
}

export default MCLSReport2ndCol;
