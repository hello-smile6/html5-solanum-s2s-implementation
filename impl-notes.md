# Implementation Notes
Order of commands during connect:
```
CAPAB QS EX CHW IE KNOCK SAVE EUID
PASS ${password} TS 6 ${sid}
SERVER ${servName} 1 ${description}
```