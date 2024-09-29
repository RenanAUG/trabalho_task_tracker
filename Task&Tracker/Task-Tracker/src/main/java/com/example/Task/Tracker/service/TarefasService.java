package com.example.Task.Tracker.service;

import com.example.Task.Tracker.model.Habitos;
import com.example.Task.Tracker.model.Tarefas;
import com.example.Task.Tracker.repository.TarefasRepository;
import com.example.Task.Tracker.repository.UsuarioRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TarefasService {

    @Autowired
    private TarefasRepository tarefasRepository;

    public List<Tarefas> getTarefasByUsuarioId(Integer usuarioId) {
        return tarefasRepository.findByUsuarioId(usuarioId);
    }

    public Tarefas save(Tarefas tarefas) {
        return this.tarefasRepository.save(tarefas);
    }

    @Transactional
    public void concluirTarefa(Long idTarefa) {

        Tarefas tarefa = tarefasRepository.findById(idTarefa)
                .orElseThrow(() -> new IllegalArgumentException("Tarefa não encontrada com o id: " + idTarefa));

        tarefa.setConcluida(true);


        tarefasRepository.save(tarefa);
    }
}


