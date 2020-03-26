
import calendar

c = calendar.TextCalendar(calendar.SUNDAY)
st = c.formatmonth(2017,1,0,0)
print(st)

c = calendar.TextCalendar(calendar.MONDAY)
st = c.formatmonth(2017, 1, 0, 0)
print(st)


hc = calendar.HTMLCalendar(calendar.SUNDAY)
st = hc.formatmonth(2017,1)
print(st)