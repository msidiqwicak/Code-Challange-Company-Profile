export interface TeamMember {
  name: string;
  photo: string;
  role: string;
  bio: string;
}

export const userService = {
  getTeams: async (): Promise<TeamMember[]> => {
    const roles = ['Game Programmer', 'Game Designer', 'Project Manager', 'Gameplay Programmer' , 'AI Programmer'];
    try {
      const response = await fetch('https://randomuser.me/api/?results=8');
      const data = await response.json();
      
      return data.results.map((user: any) => ({
        name: `${user.name.first} ${user.name.last}`,
        photo: user.picture.large,
        role: roles[Math.floor(Math.random() * roles.length)],
        bio: "Dedicated professional with a passion for building scalable web applications."
      }));
    } catch (error) {
      console.error("Failed to fetch teams", error);
      return [];
    }
  }
};