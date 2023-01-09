import type { Profile, Status } from "@prisma/client";

export type ProfileKeys = keyof Omit<Profile, "id" | "userId">;

export const ProfileLabels: Record<ProfileKeys, string> = {
	aesthetic: "Aesthetic",
	alcohol: "Alcohol",
	assigned_sex: "Assigned Sex",
	bathroom_preference: "Bathroom Preference",
	committed: "Committed",
	day_volume: "Day Volume",
	drugs: "Drugs",
	fun_fact: "Fun Fact",
	health_concerns: "Health Concerns",
	hobbies: "Hobbies",
	location: "Location",
	music: "Music",
	neatness: "Neatness",
	night_volume: "Night Volume",
	notes: "Notes",
	parties: "Parties",
	personality_test: "Personality Test",
	political_spectrum: "Political Spectrum",
	preferred_dorm: "Preferred Dorm",
	pronouns: "Pronouns",
	quiet_dorm: "Quiet Dorm",
	religion: "Religion",
	roommate_preferred_gender: "Roommate Preferred Gender",
	roommate_preferred_schools: "Roommate Preferred Schools",
	schools: "Schools",
	sexual_orientation: "Sexual Orientation",
	shower_time: "Shower Time",
	sleep: "Sleep",
	sleep_needs: "Sleep Needs",
	snore: "Snore",
	social_energy_level: "Social Energy Level",
	status: "Status",
	study_preferences: "Study Preferences",
	time_to_ready: "Time to Ready",
	wake: "Wake",
	year: "Year",
};

export const ProfileDescriptions: Record<ProfileKeys, string> = {
	aesthetic: "What your vibe is like",
	alcohol: "Thoughts on alcohol",
	assigned_sex: "Assigned sex at birth",
	bathroom_preference: "Communal bathrooms vs semi-private bathrooms for $1000",
	committed: "Whether or not you are committed",
	day_volume: "Acceptable noise levels during the day",
	drugs: "Do you tolerate drugs or smoking",
	fun_fact: "A fun fact about yourself",
	health_concerns:
		"Miscellaneous health concerns (food allergies, disabilities, etc)",
	hobbies: "Stuff you'd like to do or share with your roommate",
	location: "Where you are from",
	music: "Music taste",
	neatness: "How neat you are",
	night_volume: "Acceptable noise levels during the night",
	notes: "Anything else you would like to add",
	parties: "How often you would go out to parties or similar social events",
	personality_test: "MBTI, Enneagram, Star Sign, etc",
	political_spectrum: "Political preferences, if applicable",
	preferred_dorm: "Preferred house/floor, etc",
	pronouns: "Personal pronouns",
	quiet_dorm: "Some dorms have designated quiet areas",
	religion: "Religious preferences, if applicable",
	roommate_preferred_gender: "Preferred gender of roommate",
	roommate_preferred_schools: "Preferred schools of roommate",
	schools: "Which schools you are interested in",
	sexual_orientation: "Your sexual orientation",
	shower_time: "Preferred shower time",
	sleep: "Generally, what time you sleep at",
	sleep_needs:
		"Light levels, are you easily woken up, any health conditions, etc",
	snore: "Do you snore?",
	social_energy_level: "Introversion or Extroversion",
	status: "Have you found your roomie yet?",
	study_preferences:
		"Schedule, noise/environment, social vs. solitary studying, etc",
	time_to_ready: "How much time you take to get ready in the morning (minutes)",
	wake: "Generally, what time you wake up at",
	year: "Expected year of graduation",
};

export const SetupSteps = [
	"Begin",
	"General Info",
	"Identity",
	"Personal Info",
	"School Preferences",
	"Roommate Preferences",
	"Dorm Topics",
	"Daytime",
	"Nighttime",
	"Habitual Info",
	"The Fun Life",
	"Artistic Views",
	"Supplementary Info",
	"Wrapping Things Up...",
	"Finish",
] as const;

export type SetupStep = (typeof SetupSteps)[number];

export const SetupSections: Record<ProfileKeys, SetupStep> = {
	aesthetic: "Artistic Views",
	alcohol: "The Fun Life",
	assigned_sex: "Identity",
	bathroom_preference: "Dorm Topics",
	committed: "General Info",
	day_volume: "Daytime",
	drugs: "The Fun Life",
	fun_fact: "Wrapping Things Up...",
	health_concerns: "Personal Info",
	hobbies: "Artistic Views",
	location: "Personal Info",
	music: "Artistic Views",
	neatness: "Habitual Info",
	night_volume: "Nighttime",
	notes: "Wrapping Things Up...",
	parties: "The Fun Life",
	personality_test: "Supplementary Info",
	political_spectrum: "Supplementary Info",
	preferred_dorm: "Dorm Topics",
	pronouns: "Identity",
	quiet_dorm: "Dorm Topics",
	religion: "Supplementary Info",
	roommate_preferred_gender: "Roommate Preferences",
	roommate_preferred_schools: "Roommate Preferences",
	schools: "School Preferences",
	sexual_orientation: "Identity",
	shower_time: "Habitual Info",
	sleep: "Nighttime",
	sleep_needs: "Nighttime",
	snore: "Nighttime",
	social_energy_level: "Habitual Info",
	status: "General Info",
	study_preferences: "Habitual Info",
	time_to_ready: "Daytime",
	wake: "Daytime",
	year: "General Info",
};

export const StatusLabels: Record<Status, string> = {
	AVAILABLE: "Not yet matched",
	MAYBE: "Maybe",
	NOT_AVAILABLE: "Not available",
};
