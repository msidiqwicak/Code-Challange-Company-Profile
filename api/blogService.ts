const SB_URL = "https://rzvfoughwcwkniiwkmul.supabase.co/rest/v1";
const SB_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ6dmZvdWdod2N3a25paXdrbXVsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI5NzE4NDYsImV4cCI6MjA4ODU0Nzg0Nn0.Eb5Saqh6j21WRVK9OJZOfyZGwB_Hv0sV3VN9ie9HbrM";

export interface BlogPost {
  id?: string;
  title: string;
  content: string;
  category: string;
  admin_id: string;
  author?: string;
  excerpt: string;
  created_at?: string;
}

export const blogService = {
  getAll: async (): Promise<BlogPost[]> => {
    const res = await fetch(`${SB_URL}/blogs?select=*&order=created_at.desc`, {
      method: "GET",
      headers: {
        apikey: SB_KEY,
        Authorization: `Bearer ${SB_KEY}`,
      },
    });

    if (!res.ok) {
      console.error("Failed to get DATA blog");
      return [];
    }

    return await res.json();
  },

  getById: async (id: string): Promise<BlogPost | null> => {
    const res = await fetch(`${SB_URL}/blogs?id=eq.${id}&select=*`, {
      method: "GET",
      headers: {
        apikey: SB_KEY,
        Authorization: `Bearer ${SB_KEY}`,
      },
    });

    const data = await res.json();
    return data.length > 0 ? data[0] : null;
  },

  create: async (data: BlogPost) => {
    const res = await fetch(`${SB_URL}/blogs`, {
      method: "POST",
      headers: {
        apikey: SB_KEY,
        Authorization: `Bearer ${SB_KEY}`,
        "Content-Type": "application/json",
        Prefer: "return=representation",
      },
      body: JSON.stringify({
        title: data.title,
        content: data.content,
        category: data.category,
        admin_id: data.admin_id,
        author: data.author,
        excerpt: data.excerpt,
        created_at: new Date().toISOString(),
      }),
    });

    if (!res.ok) {
      const errorData = await res.json();
      console.error("Detail Error Supabase:", errorData);
      throw new Error(errorData.message || "Gagal menyimpan blog.");
    }

    return await res.json();
  },

  update: async (id: string, data: Partial<BlogPost>) => {
    const res = await fetch(`${SB_URL}/blogs?id=eq.${id}`, {
      method: "PATCH",
      headers: {
        apikey: SB_KEY,
        Authorization: `Bearer ${SB_KEY}`,
        "Content-Type": "application/json",
        Prefer: "return=representation",
      },
      body: JSON.stringify({
        title: data.title,
        content: data.content,
        category: data.category,
        author: data.author,
        excerpt: data.content
          ? data.content.substring(0, 150) + "..."
          : data.excerpt,
      }),
    });

    if (!res.ok) {
      const errorData = await res.json();
      console.error("Update Failed:", errorData);
      throw new Error(errorData.message || "Update Failed");
    }

    return await res.json();
  },

  delete: async (id: string) => {
    const res = await fetch(`${SB_URL}/blogs?id=eq.${id}`, {
      method: "DELETE",
      headers: {
        apikey: SB_KEY,
        Authorization: `Bearer ${SB_KEY}`,
      },
    });

    return res.ok;
  },
};
