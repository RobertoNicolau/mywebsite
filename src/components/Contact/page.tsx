'use client'
import styles from './page.module.css'
import React from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { CaretRight, X } from 'phosphor-react'

export default function Contact() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className={styles.Button}>
          Solicitar Projeto
          <CaretRight size={20} />
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={styles.DialogOverlay} />
        <Dialog.Content className={styles.DialogContent}>
          <Dialog.Title className={styles.DialogTitle}>
            Solicitar Projeto
          </Dialog.Title>
          <Dialog.Description className={styles.DialogDescription}>
            Não gosta de formulários? Me mande um email:
          </Dialog.Description>
          <fieldset className={styles.Fieldset}>
            <label className={styles.Label} htmlFor="name">
              Nome
            </label>
            <input
              className={styles.Input}
              id="name"
              defaultValue="Roberto Nicolau"
            />
          </fieldset>
          <fieldset className={styles.Fieldset}>
            <label className={styles.Label} htmlFor="company">
              Empresa
            </label>
            <input
              className={styles.Input}
              id="company"
              defaultValue="Your Company"
            />
          </fieldset>
          <fieldset className={styles.Fieldset}>
            <label className={styles.Label} htmlFor="username">
              Username
            </label>
            <input
              className={styles.Input}
              id="username"
              defaultValue="@robertonicolau"
            />
          </fieldset>
          <div
            style={{
              display: 'flex',
              marginTop: 25,
              justifyContent: 'flex-end',
            }}
          >
            <Dialog.Close asChild>
              <button className="Button green">Save changes</button>
            </Dialog.Close>
          </div>
          <Dialog.Close asChild>
            <button className="IconButton" aria-label="Close">
              <X />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
