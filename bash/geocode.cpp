#include<iostream>
#include<stdlib.h>
#include<memory.h>
#include<string.h>
#include<stdio.h>
#include<ctime>
using namespace std;

#define SUNDAY 0
#define MONDAY 1 
#define TUESDAY 2 
#define WEDNESDAY 3 
#define THURSDAY 4 
#define FRIDAY 5 
#define SATURDAY 6

//char days_of_week[7][BUFSIZ] = { "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY" };
int main() {
	FILE* camera_locations = fopen("/var/www/html/speed/data_files/speed_camera_locations.txt", "r");
	size_t len = 0;
	ssize_t read;
	
	int line = 0;
	int day = -1;

	int address_no = 0;

	time_t now = time(0);
	tm *ltm = localtime(&now);
	int today = (ltm->tm_wday + 1)%7;

	char* beginurl= (char*) malloc(BUFSIZ); 
	char* endurl = (char*) malloc(BUFSIZ);
	strncat(beginurl, "https://maps.googleapis.com/maps/api/geocode/json?address=\n", 57);
	strncat(endurl, "&key=YOUR-API-KEY-GOES-HERE\n",45); 
	char addresses[512][512]; 

	int subOrStreet = 0;

	for(int i = 0; i < BUFSIZ; i++) strncat(addresses[i], ".", 0); 

	char* data = (char* ) malloc(sizeof(char) * BUFSIZ);
		
	while((read = getline(&data, &len, camera_locations)) != -1) {	
		line++;
		if(line < 4) continue;
			
		if(!strncmp("Street", data, 6) || !strncmp("Suburb", data, 6)) continue;
		

		if(strncmp("MONDAY", data, 6) == 0) day = MONDAY; 
		if(strncmp("TUESDAY", data, 7) == 0) day = TUESDAY; 
		if(strncmp("WEDNESDAY", data, 7) == 0) day = WEDNESDAY; 
		if(strncmp("THURSDAY", data, 7) == 0) day = THURSDAY; 
		if(strncmp("FRIDAY", data, 7) == 0) day = FRIDAY; 
		if(strncmp("SATURDAY", data, 7) == 0) day = SATURDAY; 
		if(strncmp("SUNDAY", data, 7) == 0) day = SUNDAY; 

		if(strncmp("MONDAY", data, 6) == 0) day = MONDAY; 
		if(strncmp("TUESDAY", data, 7) == 0) day = TUESDAY; 
		if(strncmp("WEDNESDAY", data, 7) == 0) day = WEDNESDAY; 
		if(strncmp("THURSDAY", data, 7) == 0) day = THURSDAY; 
		if(strncmp("FRIDAY", data, 7) == 0) day = FRIDAY; 
		if(strncmp("SATURDAY", data, 7) == 0) day = SATURDAY; 

		if(!strncmp("MONDAY", data, 3) || 
			!strncmp("TUESDAY", data, 3) ||
			!strncmp("WEDNESDAY", data, 3) ||
			!strncmp("THURSDAY", data, 3) ||
			!strncmp("FRIDAY", data, 3) ||
			!strncmp("SATURDAY", data, 3) ||
			!strncmp("SUNDAY", data, 3) 
		) continue; 

		if(!strncmp("MONDAY", data, 3) || 
			!strncmp("TUESDAY", data, 3) ||
			!strncmp("WEDNESDAY", data, 3) ||
			!strncmp("THURSDAY", data, 3) ||
			!strncmp("FRIDAY", data, 3) ||
			!strncmp("SATURDAY", data, 3) ||
			!strncmp("SUNDAY", data, 3) 
		) continue;

		//if(today == day) printf("%s", data);
		if(today == day && strncmp("\n", data, 1) == 0) {
			subOrStreet = (subOrStreet + 1)%2;
			
			address_no = 0;
			continue;
		}
		else if(today == day) {
			int len = strlen(addresses[address_no]);
			strncat(addresses[address_no], data, BUFSIZ); 
			if(subOrStreet == 1) addresses[address_no][len-1] = '+';
			else addresses[address_no][len-1] = '\n';	

		}

		//printf("%s\n", data);
		//printf("%d\n", address_no);
		if(today == day) address_no++;
		

		
	}
	char request[BUFSIZ];
	char command[BUFSIZ];
	for(int i = 0; i < 200; i++) {
		int position = 0;
		for(int j = 0; j < BUFSIZ; j++) {
			if(addresses[i][j] == '\n') { 
				position = 0; 
				strncpy(command, "./geocoderequest.sh ", BUFSIZ);	
				//continue; 
			}
			request[j] = addresses[i][j];
			if(request[j] == ' ') request[j] = '+';
		}
		for(int z = 0; z < BUFSIZ; z++) if(addresses[i][z] == ' ') addresses[i][z] = '+';
		printf("%s", addresses[i]);
	}
}	

