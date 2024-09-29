package com.example.Task.Tracker.controller.web;

import com.example.Task.Tracker.model.Tarefas;
import com.example.Task.Tracker.service.TarefasService;
import jakarta.servlet.http.HttpSession;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

@Controller
public class TarefasController {

    private final TarefasService tarefasService;

    public TarefasController(TarefasService tarefasService) {
        this.tarefasService = tarefasService;
    }

    @GetMapping("/cadastrarTarefas")
    public String cadastrarTarefaForm() {
        return "cadastrarTarefas";
    }

    @PostMapping("/tarefas/save")
    public String saveTarefas(Tarefas tarefas, HttpSession session) {
        Integer usuarioId = Integer.valueOf(session.getAttribute("usuarioLogado").toString());

        tarefas.setUsuario_id(usuarioId);

        tarefasService.save(tarefas);
        return "redirect:/tarefa"; // Nome da página que você vai criar
    }

    @PostMapping("/tarefas/concluir")
    public String concluirTarefas(@RequestParam("tarefaId") Long tarefaId) {
        tarefasService.concluirTarefa(tarefaId);

        return "redirect:/tarefa";
    }
}
