import { createClient } from "@supabase/supabase-js";

export const supabase=createClient(
  "https://augceosgywrucqmlspjq.supabase.co",
  "sb_publishable_qrtTOji3Xl00Qt4oYW8cFw_dzEWPzHz"
);

export const patientEmail=(name:string)=>`${name.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().trim().replace(/[^a-z0-9]+/g,".").replace(/^\.|\.$/g,"")}@pacientes.dracamila.app`;
