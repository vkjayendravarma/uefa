interface TeamAttendanceData{
    ts:boolean;
    pm:boolean;
}

export interface TeamAttendance{
    date: number;
    isHoliday: boolean;
    data: TeamAttendanceData;
}