'use client'
import React, { useEffect, useState } from "react";
import { Button } from '@nextui-org/button';
import { useRouter } from "next/navigation";
import type { UserType } from '@/types/UserType'
import Cadastro from "@/components/Modals/Cadastro";
import { deleteRequests, getRequests } from "@/service/usuarioService";
import { User } from "@nextui-org/react";
import { FaTrash } from "react-icons/fa6";
import { RiPencilFill } from "react-icons/ri";
import Editar from "@/components/Modals/Editar";

export default function Home() {
  const router = useRouter()

  const [users, setUsers] = useState<UserType[]>([])

  const getAllUsers = async () => {
    const usersTooked = await getRequests("/buscarUsuarios").then(response => response)
    setUsers(usersTooked)
  }

  const deleteUser = async (id: number) => {
    const newUsers = await deleteRequests(`/${id}`).then(response => response)
    setUsers(newUsers)
  }

  const [openSignin, setOpenSignin] = useState<boolean>(false)
  const [openEdition, setOpenEdition] = useState<boolean>(false)

  useEffect(() => {
    if (!openSignin) {
      getAllUsers()
    }
  }, [openSignin, users])


  return (
    <main className="">
      <div className="flex flex-col items-center justify-between w-full mt-10">
        <div>
          <Button onClick={() => setOpenSignin(true)}>Create</Button>
        </div>
        <div className="flex flex-col gap-4 bg-sky-50 p-8 rounded-2xl mt-10 items-start">
          {
            users?.map((user) => (
              <div className="flex flex-row items-center justify-between gap-5 w-full" key={user.id}>
                <User name={user.nome} description={user.email} />
                <div className="flex flex-row items-end justify-end gap-4 w-[40%]">
                  <RiPencilFill onClick={()=>setOpenEdition(true)}/>
                  <FaTrash onClick={() => deleteUser(user.id!)} />
                </div>
                {
                  openEdition && (
                    <div className="absolute w-full">
                      <Editar setModalState={setOpenEdition} emailProps={user.email} id={user.id!} />
                    </div>
                  )
                }
              </div>
            ))
          }
        </div>
      </div>
      {
        openSignin && (
          <div className="absolute w-full">
            <Cadastro setModalState={setOpenSignin} />
          </div>
        )
        
      }
    </main>
  );
}
