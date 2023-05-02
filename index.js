// Your code here
function createEmployeeRecord(array){
    let obj={}
    obj.firstName=array[0]
    obj.familyName=array[1]
    obj.title=array[2]
    obj.payPerHour=array[3]
    obj.timeInEvents=[]
    obj.timeOutEvents=[]
return obj;
}
 
function createEmployeeRecords(twoRows){
    let employeeRecords=[]
    for(let i=0;i<twoRows.length;i++){
   const Array=twoRows[i]
   employeeRecords.push(createEmployeeRecord(Array))
    }
   
   return employeeRecords
}
function createTimeInEvent(object,dateStamp="YYYY-MM-DD HHMM"){
createEmployeeRecord(object) 
new Date(dateStamp);
const newObj={}
newObj.type="TimeIn"
newObj.hour=`${dateStamp.getHours()}${dateStamp.getMinutes()}`
newObj.date=`${dateStamp.getFullYear()}-${dateStamp.getMonth()}-${dateStamp.getDate()}`
object.timeInEvents.push(newObj)
return object
}
