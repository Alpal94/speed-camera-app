#!/bin/bash
#!/opt/local/bin/
#!/usr/local/bin/

read var1
read var2
read var3
read var4
read var5
read var6
read var7

url=""

awk -F'="' '/'$var1'/ && /'$var2'/ && /'$var3'/ && /'$var4'/ && /'$var5'/ && /'$var6'/ && /'$var7'/ { 
	split($2, a, "\">"); print a[1] 
}' police.txt







	


# awk -F: '/Frames received/ {print $2}' stats.txt > recieved 
# awk -F: '/Frames corrupted/ {print $2}' stats.txt > corrupted 
